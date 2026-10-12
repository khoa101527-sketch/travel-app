# Converts raw Figma get_design_context output (raw/*.tsx) into src/screens/*.tsx with local assets.
import re, sys, os, hashlib, subprocess, glob
raw_dir, root = sys.argv[1], sys.argv[2]
os.makedirs(f"{root}/public/assets", exist_ok=True)
os.makedirs(f"{root}/src/screens", exist_ok=True)
W = {"Regular": "normal", "Medium": "medium", "SemiBold": "semibold", "Bold": "bold", "ExtraBold": "extrabold"}
cache = {}
def fetch(url):
    if url in cache: return cache[url]
    r = subprocess.run(["curl", "-sSfL", "-o", "/tmp/_asset", "-w", "%{content_type}", url], capture_output=True, text=True, check=True)
    data = open("/tmp/_asset", "rb").read()
    assert data, url
    ext = {"image/jpeg": "jpg", "image/png": "png", "image/svg+xml": "svg", "image/webp": "webp"}.get(r.stdout.split(";")[0], url.rsplit(".", 1)[-1])
    name = f"assets/{hashlib.sha1(data).hexdigest()[:12]}.{ext}"
    path = f"{root}/public/{name}"
    if not os.path.exists(path): open(path, "wb").write(data)
    cache[url] = name
    return name
for f in sorted(glob.glob(f"{raw_dir}/*.tsx")):
    nid = os.path.basename(f)[:-4]
    code = open(f).read()
    code = re.sub(r'"(https://www\.figma\.com/api/mcp/asset/[^"]+)"', lambda m: f'"{fetch(m.group(1))}"', code)
    code = re.sub(r"font-\['(Be_Vietnam_Pro|Irish_Grover):(\w+)'\]", lambda m: f"font-['{m.group(1)}'] font-{W.get(m.group(2),'normal')}", code)
    code = re.sub(r"export default function \w+\(\)", f"export default function Screen_{nid.replace('-','_')}()", code)
    open(f"{root}/src/screens/S{nid.replace('-','_')}.tsx", "w").write(code)
    print(nid, "ok")
print(len(cache), "urls,", len(os.listdir(f"{root}/public/assets")), "files")
