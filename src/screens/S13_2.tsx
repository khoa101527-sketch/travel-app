const imgBiuCmChao = "assets/a94b4eae002b.svg";
const imgCardVnhHLong = "assets/4053917aaef2.jpg";
const imgCardPhCHiAn = "assets/095fb8273b44.jpg";
const imgBlob = "assets/83ee4e59be98.svg";
const imgAvatar = "assets/a80a9ceef93d.svg";
const imgIconBell = "assets/818466d85cbf.svg";
const imgEllipse = "assets/0d9d93c8fcd1.svg";
const imgMascotLali = "assets/65099ad5c21e.svg";
const imgIconMic = "assets/7d9fd89bf4e4.svg";
const imgIconCamera = "assets/0862f36a933d.svg";
const imgIconStar = "assets/1f94ae0b0e8a.svg";
const imgIconHeart = "assets/3b08ed984ae6.svg";
const imgIconPin = "assets/2ca1adf50fdf.svg";
const imgAvatar1 = "assets/a9abefb23c85.svg";
const imgAvatar2 = "assets/1519b4315d55.svg";
const imgAvatar3 = "assets/9f292ea98546.svg";
const imgIconHome = "assets/cc7bb1e9befb.svg";
const imgIconCompass = "assets/d8fc58729831.svg";
const imgIconLuggage = "assets/8875e6118b4b.svg";
const imgIconTicket = "assets/3a757b2b53ed.svg";
const imgIconUser = "assets/c899e45db393.svg";

type ChipProps = {
  className?: string;
  nhan?: string;
  state?: "Mặc định";
};

function Chip({ className, nhan = "🏖️ Biển", state = "Mặc định" }: ChipProps) {
  return (
    <div className={className || "bg-[var(--neutral\\/white,white)] border border-[var(--neutral\\/line,#e4e9f2)] border-solid content-stretch flex items-center px-[16px] py-[10px] relative rounded-[999px]"} data-node-id="11:15">
      <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[15px] text-[color:var(--neutral\/ink,#0e1730)] whitespace-nowrap" data-node-id="11:16">
        {nhan}
      </p>
    </div>
  );
}

type MascotLaliProps = {
  className?: string;
  biuCm?: "Chào";
};

function MascotLali({ className, biuCm = "Chào" }: MascotLaliProps) {
  return (
    <div className={className || "relative size-[200px]"} data-node-id="8:19">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBiuCmChao} />
    </div>
  );
}

export default function Screen_13_2() {
  return (
    <div className="relative size-full" data-node-id="13:2" style={{ backgroundImage: "linear-gradient(180deg, rgb(209, 240, 252) 0%, rgba(242, 247, 252, 0) 45%), linear-gradient(90deg, rgb(243, 247, 252) 0%, rgb(243, 247, 252) 100%)" }} data-name="01 · Tổng quan">
      <div className="absolute left-[200px] size-[260px] top-[-60px]" data-node-id="13:3" data-name="Blob">
        <div className="absolute inset-[-23.08%]">
          <img alt="" className="block max-w-none size-full" src={imgBlob} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] left-[32px] not-italic text-[15px] text-[color:var(--neutral\/ink,#0e1730)] top-[16px] whitespace-nowrap" data-node-id="13:4">
        9:41
      </p>
      <div className="absolute content-stretch flex gap-[12px] items-center left-[20px] top-[56px]" data-node-id="13:5" data-name="Header">
        <div className="relative shrink-0 size-[44px]" data-node-id="13:6" data-name="Avatar">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvatar} />
        </div>
        <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-node-id="13:7" data-name="Greeting">
          <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-medium leading-[1.4] not-italic relative shrink-0 text-[13px] text-[color:var(--neutral\/ink-2,#5b6585)] whitespace-nowrap" data-node-id="13:8">
            Chào Minh 👋
          </p>
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="13:9" data-name="Rank">
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[15px] text-[color:var(--brand\/navy,#193376)] whitespace-nowrap" data-node-id="13:10">
              Phượt thủ
            </p>
            <div className="bg-[var(--brand\/sun,#ffd23f)] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[999px] shrink-0" data-node-id="13:11" data-name="Points">
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--brand\/navy,#193376)] tracking-[0.06px] whitespace-nowrap" data-node-id="13:12">
                1.240 điểm
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[12px] bg-[var(--glass\/light,rgba(255,255,255,0.62))] border border-[var(--glass\/stroke,rgba(255,255,255,0.7))] border-solid content-stretch flex items-start left-[322px] p-[12px] rounded-[999px] top-[54px]" data-node-id="13:13" data-name="Bell">
        <div className="relative shrink-0 size-[24px]" data-node-id="13:14" data-name="Icon/bell">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconBell} />
        </div>
      </div>
      <div className="absolute left-[352px] size-[10px] top-[62px]" data-node-id="13:16" data-name="Ellipse">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
      </div>
      <div className="[word-break:break-word] absolute font-['Be_Vietnam_Pro'] font-extrabold leading-[0] left-[20px] not-italic text-[44px] text-[color:var(--brand\/navy,#193376)] top-[124px] tracking-[-0.88px] w-[260px]" data-node-id="13:17">
        <p className="leading-[1.1] mb-0">Xách balo</p>
        <p className="leading-[1.1]">{`lên và `}</p>
      </div>
      <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro'] font-extrabold leading-[1.1] left-[20px] not-italic text-[44px] text-[color:var(--brand\/cyan,#04a8dc)] top-[221px] tracking-[-0.88px] whitespace-nowrap" data-node-id="13:18">
        đi thôi!
      </p>
      <div className="absolute flex items-center justify-center left-[215.96px] size-[162.64px] top-[118px]" data-node-id="13:19">
        <div className="flex-none rotate-8">
          <div className="relative size-[144px]" data-name="Mascot / Lali">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMascotLali} />
          </div>
        </div>
      </div>
      <a className="absolute bg-[var(--neutral\/white,white)] content-stretch cursor-pointer drop-shadow-[0px_12px_16px_rgba(25,51,118,0.12)] flex gap-[10px] h-[60px] items-center left-[16px] p-[8px] rounded-[999px] top-[292px] w-[358px]" data-node-id="13:36" data-name="AI Bar">
        <div className="bg-[var(--brand\/cyan-soft,#ddf4fc)] overflow-clip relative rounded-[999px] shrink-0 size-[44px]" data-node-id="I13:36;11:144" data-name="Lali">
          <MascotLali className="absolute left-0 size-[44px] top-[4px]" />
        </div>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Be_Vietnam_Pro'] font-normal h-[23px] leading-[1.5] min-w-px not-italic overflow-hidden relative text-[15px] text-[color:var(--neutral\/ink-2,#5b6585)] text-ellipsis text-left whitespace-nowrap" data-node-id="I13:36;11:145">
          Hỏi Lali: “Cuối tuần đi đâu?”
        </p>
        <div className="bg-[var(--neutral\/bg,#f3f7fc)] content-stretch flex items-start p-[10px] relative rounded-[999px] shrink-0" data-node-id="I13:36;11:146" data-name="Btn/mic">
          <div className="relative shrink-0 size-[24px]" data-node-id="I13:36;11:147" data-name="Icon/mic">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconMic} />
          </div>
        </div>
        <div className="bg-[var(--brand\/navy,#193376)] content-stretch flex items-start p-[10px] relative rounded-[999px] shrink-0" data-node-id="I13:36;11:150" data-name="Btn/camera">
          <div className="relative shrink-0 size-[24px]" data-node-id="I13:36;11:151" data-name="Icon/camera">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCamera} />
          </div>
        </div>
      </a>
      <div className="absolute content-stretch cursor-pointer flex gap-[8px] items-start left-[16px] top-[366px]" data-node-id="13:84" data-name="Gợi ý nhanh">
        <Chip className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch flex items-center px-[16px] py-[10px] relative rounded-[999px] shrink-0" nhan="✨ Lên lịch 3N2Đ" />
        <Chip className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch flex items-center px-[16px] py-[10px] relative rounded-[999px] shrink-0" nhan="🗺️ Tìm chỗ chill" />
        <Chip className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch flex items-center px-[16px] py-[10px] relative rounded-[999px] shrink-0" nhan="📷 Quét địa điểm" />
      </div>
      <div className="[word-break:break-word] absolute content-stretch flex h-[30px] items-center justify-between left-[16px] not-italic top-[428px] w-[358px] whitespace-nowrap" data-node-id="13:91" data-name="Section/Nổi bật">
        <p className="font-['Be_Vietnam_Pro'] font-bold leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--neutral\/ink,#0e1730)] tracking-[-0.09px]" data-node-id="13:92">
          Chuyến đi nổi bật 🔥
        </p>
        <p className="font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--brand\/cyan,#04a8dc)]" data-node-id="13:93">
          Xem tất cả
        </p>
      </div>
      <div className="absolute content-stretch cursor-pointer flex gap-[12px] items-start left-[16px] top-[470px]" data-node-id="13:94" data-name="Cards">
        <a className="block h-[262px] overflow-clip relative rounded-[28px] shrink-0 w-[250px]" data-node-id="13:95" data-name="Card/Vịnh Hạ Long">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[28px] size-full" src={imgCardVnhHLong} />
          <div className="absolute backdrop-blur-[12px] bg-[var(--glass\/light,rgba(255,255,255,0.62))] content-stretch flex items-start left-[14px] px-[10px] py-[6px] rounded-[999px] top-[14px]" data-node-id="13:96" data-name="Tag">
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="13:97" data-name="Frame">
              <div className="relative shrink-0 size-[14px]" data-node-id="13:98" data-name="Icon/star">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconStar} />
              </div>
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--brand\/navy,#193376)] text-left tracking-[0.06px] whitespace-nowrap" data-node-id="13:100">
                4.9
              </p>
            </div>
          </div>
          <div className="absolute backdrop-blur-[12px] bg-[var(--glass\/light,rgba(255,255,255,0.62))] content-stretch flex items-start left-[200px] p-[9px] rounded-[999px] top-[14px]" data-node-id="13:101" data-name="Save">
            <div className="relative shrink-0 size-[18px]" data-node-id="13:102" data-name="Icon/heart">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHeart} />
            </div>
          </div>
          <div className="absolute backdrop-blur-[12px] bg-[var(--glass\/dark,rgba(14,23,48,0.38))] border border-[var(--glass\/stroke,rgba(255,255,255,0.7))] border-solid content-stretch flex flex-col gap-[6px] items-start left-[12px] px-[14px] py-[12px] rounded-[20px] top-[126px] w-[226px]" data-node-id="13:104" data-name="Info">
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-bold leading-[1.3] not-italic relative shrink-0 text-[18px] text-[color:var(--neutral\/white,white)] text-left tracking-[-0.09px] whitespace-nowrap" data-node-id="13:105">
              Vịnh Hạ Long
            </p>
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="13:106" data-name="Frame">
              <div className="relative shrink-0 size-[14px]" data-node-id="13:107" data-name="Icon/pin">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPin} />
              </div>
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-medium leading-[1.4] not-italic relative shrink-0 text-[13px] text-[color:var(--neutral\/white,white)] text-left whitespace-nowrap" data-node-id="13:110">
                Quảng Ninh
              </p>
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="13:111" data-name="Bottom">
              <div className="[word-break:break-word] content-stretch flex flex-col font-['Be_Vietnam_Pro'] font-semibold items-start not-italic relative shrink-0 text-left whitespace-nowrap" data-node-id="13:112" data-name="Frame">
                <p className="leading-[1.3] relative shrink-0 text-[12px] text-[color:var(--neutral\/white,white)] tracking-[0.06px]" data-node-id="13:113">
                  từ
                </p>
                <p className="leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--brand\/sun,#ffd23f)]" data-node-id="13:114">
                  1.290.000đ
                </p>
              </div>
              <div className="content-stretch flex isolate items-center relative shrink-0" data-node-id="13:115" data-name="Avatar Stack">
                <div className="mr-[-10px] relative shrink-0 size-[28px] z-[4]" data-node-id="I13:115;11:155" data-name="Avatar">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvatar1} />
                </div>
                <div className="mr-[-10px] relative shrink-0 size-[28px] z-[3]" data-node-id="I13:115;11:156" data-name="Avatar">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvatar2} />
                </div>
                <div className="mr-[-10px] relative shrink-0 size-[28px] z-[2]" data-node-id="I13:115;11:157" data-name="Avatar">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvatar3} />
                </div>
                <div className="bg-[var(--brand\/sun,#ffd23f)] border-2 border-[var(--neutral\/white,white)] border-solid content-stretch flex items-start px-[10px] py-[6px] relative rounded-[999px] shrink-0 z-[1]" data-node-id="I13:115;11:158" data-name="Count">
                  <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--brand\/navy,#193376)] text-left tracking-[0.06px] whitespace-nowrap" data-node-id="I13:115;11:159">
                    +2,3k
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a className="block h-[262px] overflow-clip relative rounded-[28px] shrink-0 w-[250px]" data-node-id="13:121" data-name="Card/Phố cổ Hội An">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[28px] size-full" src={imgCardPhCHiAn} />
          <div className="absolute backdrop-blur-[12px] bg-[var(--glass\/light,rgba(255,255,255,0.62))] content-stretch flex items-start left-[14px] px-[10px] py-[6px] rounded-[999px] top-[14px]" data-node-id="13:122" data-name="Tag">
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="13:123" data-name="Frame">
              <div className="relative shrink-0 size-[14px]" data-node-id="13:124" data-name="Icon/star">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconStar} />
              </div>
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--brand\/navy,#193376)] text-left tracking-[0.06px] whitespace-nowrap" data-node-id="13:126">
                4.8
              </p>
            </div>
          </div>
          <div className="absolute backdrop-blur-[12px] bg-[var(--glass\/light,rgba(255,255,255,0.62))] content-stretch flex items-start left-[200px] p-[9px] rounded-[999px] top-[14px]" data-node-id="13:127" data-name="Save">
            <div className="relative shrink-0 size-[18px]" data-node-id="13:128" data-name="Icon/heart">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHeart} />
            </div>
          </div>
          <div className="absolute backdrop-blur-[12px] bg-[var(--glass\/dark,rgba(14,23,48,0.38))] border border-[var(--glass\/stroke,rgba(255,255,255,0.7))] border-solid content-stretch flex flex-col gap-[6px] items-start left-[12px] px-[14px] py-[12px] rounded-[20px] top-[126px] w-[226px]" data-node-id="13:130" data-name="Info">
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-bold leading-[1.3] not-italic relative shrink-0 text-[18px] text-[color:var(--neutral\/white,white)] text-left tracking-[-0.09px] whitespace-nowrap" data-node-id="13:131">
              Phố cổ Hội An
            </p>
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="13:132" data-name="Frame">
              <div className="relative shrink-0 size-[14px]" data-node-id="13:133" data-name="Icon/pin">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPin} />
              </div>
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-medium leading-[1.4] not-italic relative shrink-0 text-[13px] text-[color:var(--neutral\/white,white)] text-left whitespace-nowrap" data-node-id="13:136">
                Quảng Nam
              </p>
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="13:137" data-name="Bottom">
              <div className="[word-break:break-word] content-stretch flex flex-col font-['Be_Vietnam_Pro'] font-semibold items-start not-italic relative shrink-0 text-left whitespace-nowrap" data-node-id="13:138" data-name="Frame">
                <p className="leading-[1.3] relative shrink-0 text-[12px] text-[color:var(--neutral\/white,white)] tracking-[0.06px]" data-node-id="13:139">
                  từ
                </p>
                <p className="leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--brand\/sun,#ffd23f)]" data-node-id="13:140">
                  890.000đ
                </p>
              </div>
              <div className="content-stretch flex isolate items-center relative shrink-0" data-node-id="13:141" data-name="Avatar Stack">
                <div className="mr-[-10px] relative shrink-0 size-[28px] z-[4]" data-node-id="I13:141;11:155" data-name="Avatar">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvatar1} />
                </div>
                <div className="mr-[-10px] relative shrink-0 size-[28px] z-[3]" data-node-id="I13:141;11:156" data-name="Avatar">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvatar2} />
                </div>
                <div className="mr-[-10px] relative shrink-0 size-[28px] z-[2]" data-node-id="I13:141;11:157" data-name="Avatar">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvatar3} />
                </div>
                <div className="bg-[var(--brand\/sun,#ffd23f)] border-2 border-[var(--neutral\/white,white)] border-solid content-stretch flex items-start px-[10px] py-[6px] relative rounded-[999px] shrink-0 z-[1]" data-node-id="I13:141;11:158" data-name="Count">
                  <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--brand\/navy,#193376)] text-left tracking-[0.06px] whitespace-nowrap" data-node-id="I13:141;11:159">
                    +5,1k
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="absolute backdrop-blur-[12px] bg-[var(--glass\/light,rgba(255,255,255,0.62))] border border-[var(--glass\/stroke,rgba(255,255,255,0.7))] border-solid content-stretch flex h-[64px] items-center justify-between left-[16px] p-[8px] rounded-[999px] top-[760px] w-[358px]" data-node-id="13:148" data-name="Tab Bar">
        <div className="bg-[var(--brand\/navy,#193376)] content-stretch flex gap-[6px] items-center px-[16px] py-[12px] relative rounded-[999px] shrink-0" data-node-id="I13:148;11:21" data-name="Item/Tổng quan">
          <div className="relative shrink-0 size-[24px]" data-node-id="I13:148;11:22" data-name="Icon/home">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome} />
          </div>
          <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--neutral\/white,white)] tracking-[0.06px] whitespace-nowrap" data-node-id="I13:148;11:24">
            Tổng quan
          </p>
        </div>
        <a className="content-stretch cursor-pointer flex items-center p-[12px] relative rounded-[999px] shrink-0" data-node-id="I13:148;11:25" data-name="Item/Khám phá">
          <div className="relative shrink-0 size-[24px]" data-node-id="I13:148;11:26" data-name="Icon/compass">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCompass} />
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex items-center p-[12px] relative rounded-[999px] shrink-0" data-node-id="I13:148;11:29" data-name="Item/Chuyến đi">
          <div className="relative shrink-0 size-[24px]" data-node-id="I13:148;11:30" data-name="Icon/luggage">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLuggage} />
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex items-center p-[12px] relative rounded-[999px] shrink-0" data-node-id="I13:148;11:33" data-name="Item/Voucher">
          <div className="relative shrink-0 size-[24px]" data-node-id="I13:148;11:34" data-name="Icon/ticket">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTicket} />
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex items-center p-[12px] relative rounded-[999px] shrink-0" data-node-id="I13:148;11:37" data-name="Item/Hồ sơ">
          <div className="relative shrink-0 size-[24px]" data-node-id="I13:148;11:38" data-name="Icon/user">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconUser} />
          </div>
        </a>
      </div>
    </div>
  );
}