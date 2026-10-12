const imgNhDaLt = "assets/a655b253572a.jpg";
const imgNhMay = "assets/023c11d4fa88.jpg";
const imgNhDiChe = "assets/adcdc8f1160e.jpg";
const imgNhBanhCan = "assets/504f6859029c.jpg";
const imgNhThungLung = "assets/f706f585a2f7.jpg";
const imgIconArrow = "assets/36c54e81ec68.svg";
const imgIconUsers = "assets/5b369595f164.svg";
const imgEllipse = "assets/5c875d0da0fc.svg";
const imgMascotLali = "assets/e3cfdcac86e2.svg";

type ChipProps = {
  className?: string;
  nhan?: string;
  state?: "Mặc định" | "Đang chọn";
};

function Chip({ className, nhan = "🏖️ Biển", state = "Mặc định" }: ChipProps) {
  const isDangChn = state === "Đang chọn";
  return (
    <div className={className || `content-stretch flex items-center px-[16px] py-[10px] relative rounded-[999px] ${isDangChn ? String.raw`bg-[var(--brand\/navy,#193376)]` : String.raw`bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid`}`} id={isDangChn ? "node-11_17" : "node-11_15"}>
      {state === "Mặc định" && (
        <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[15px] text-[color:var(--neutral\/ink,#0e1730)] whitespace-nowrap" data-node-id="11:16">
          {nhan}
        </p>
      )}
      {isDangChn && (
        <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[15px] text-[color:var(--neutral\/white,white)] whitespace-nowrap" data-node-id="11:18">
          {nhan}
        </p>
      )}
    </div>
  );
}

export default function Screen_20_478() {
  return (
    <div className="bg-[var(--neutral\/bg,#f3f7fc)] relative size-full" data-node-id="20:478" data-name="09 · Lịch trình">
      <div className="absolute h-[230px] left-0 overflow-clip top-0 w-[390px]" data-node-id="20:480" data-name="Ảnh/Đà Lạt">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNhDaLt} />
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.25)] h-[230px] left-0 to-[rgba(13,31,77,0.7)] top-0 w-[390px]" data-node-id="20:481" data-name="Rectangle" />
      </div>
      <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] left-[32px] not-italic text-[15px] text-[color:var(--neutral\/white,white)] top-[16px] whitespace-nowrap" data-node-id="20:479">
        9:41
      </p>
      <div className="absolute content-stretch flex h-[48px] items-center justify-between left-[16px] top-[50px] w-[358px]" data-node-id="20:482" data-name="Top Bar">
        <button className="backdrop-blur-[12px] bg-[var(--glass\/light,rgba(255,255,255,0.62))] border border-[var(--glass\/stroke,rgba(255,255,255,0.7))] border-solid content-stretch cursor-pointer flex items-start p-[12px] relative rounded-[999px] shrink-0" data-node-id="20:483" data-name="Btn/arrow">
          <div className="flex items-center justify-center relative shrink-0" data-node-id="20:484">
            <div className="flex-none rotate-180">
              <div className="relative size-[24px]" data-name="Icon/arrow">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconArrow} />
              </div>
            </div>
          </div>
        </button>
        <div className="backdrop-blur-[12px] bg-[var(--glass\/light,rgba(255,255,255,0.62))] border border-[var(--glass\/stroke,rgba(255,255,255,0.7))] border-solid content-stretch flex items-start p-[12px] relative rounded-[999px] shrink-0" data-node-id="20:486" data-name="Btn/users">
          <div className="relative shrink-0 size-[24px]" data-node-id="20:487" data-name="Icon/users">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconUsers} />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[6px] items-start left-[20px] top-[128px]" data-node-id="20:490" data-name="Frame">
        <div className="bg-[var(--brand\/sun,#ffd23f)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="20:491" data-name="Frame">
          <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--brand\/navy,#193376)] tracking-[0.06px] whitespace-nowrap" data-node-id="20:492">
            ✨ Lali tạo · 15–17/11
          </p>
        </div>
        <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-extrabold leading-[1.2] not-italic relative shrink-0 text-[30px] text-[color:var(--neutral\/white,white)] tracking-[-0.45px] whitespace-nowrap" data-node-id="20:493">
          Đà Lạt 3N2Đ chill
        </p>
      </div>
      <div className="absolute bg-[var(--neutral\/bg,#f3f7fc)] content-stretch flex flex-col gap-[16px] items-start left-0 pb-[200px] pt-[20px] px-[16px] rounded-tl-[28px] rounded-tr-[28px] top-[210px] w-[390px]" data-node-id="20:494" data-name="Content">
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="20:495" data-name="Frame">
          <Chip className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch flex items-center px-[16px] py-[10px] relative rounded-[999px] shrink-0" nhan="Ngày 1" />
          <Chip className="bg-[var(--brand\/navy,#193376)] content-stretch flex items-center px-[16px] py-[10px] relative rounded-[999px] shrink-0" nhan="Ngày 2" state="Đang chọn" />
          <Chip className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch flex items-center px-[16px] py-[10px] relative rounded-[999px] shrink-0" nhan="Ngày 3" />
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="20:502" data-name="Timeline">
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="20:503" data-name="Frame">
            <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0" data-node-id="20:504" data-name="Frame">
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--brand\/navy,#193376)] tracking-[0.06px] whitespace-nowrap" data-node-id="20:505">
                05:00
              </p>
              <div className="relative shrink-0 size-[12px]" data-node-id="20:506" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
              </div>
            </div>
            <div className="bg-[var(--neutral\/white,white)] content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px pl-[8px] pr-[12px] py-[8px] relative rounded-[20px]" data-node-id="20:507" data-name="Frame">
              <div className="relative rounded-[14px] shrink-0 size-[56px]" data-node-id="20:508" data-name="Ảnh/Mây">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgNhMay} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0" data-node-id="20:509" data-name="Frame">
                <p className="font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--neutral\/ink,#0e1730)] w-[210px]" data-node-id="20:510">
                  Săn mây Cầu Đất
                </p>
                <p className="font-['Be_Vietnam_Pro'] font-medium leading-[1.4] relative shrink-0 text-[13px] text-[color:var(--neutral\/ink-2,#5b6585)] w-[210px]" data-node-id="20:511">
                  🚐 45 phút từ trung tâm
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="20:512" data-name="Frame">
            <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0" data-node-id="20:513" data-name="Frame">
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--brand\/navy,#193376)] tracking-[0.06px] whitespace-nowrap" data-node-id="20:514">
                08:30
              </p>
              <div className="relative shrink-0 size-[12px]" data-node-id="20:515" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
              </div>
            </div>
            <div className="bg-[var(--neutral\/white,white)] content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px pl-[8px] pr-[12px] py-[8px] relative rounded-[20px]" data-node-id="20:516" data-name="Frame">
              <div className="relative rounded-[14px] shrink-0 size-[56px]" data-node-id="20:517" data-name="Ảnh/Đồi chè">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgNhDiChe} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0" data-node-id="20:518" data-name="Frame">
                <p className="font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--neutral\/ink,#0e1730)] w-[210px]" data-node-id="20:519">{`Đồi chè & cafe view rừng thông`}</p>
                <p className="font-['Be_Vietnam_Pro'] font-medium leading-[1.4] relative shrink-0 text-[13px] text-[color:var(--neutral\/ink-2,#5b6585)] w-[210px]" data-node-id="20:520">
                  ☕ Ngân sách ~80k/người
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="20:521" data-name="Frame">
            <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0" data-node-id="20:522" data-name="Frame">
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--brand\/navy,#193376)] tracking-[0.06px] whitespace-nowrap" data-node-id="20:523">
                12:00
              </p>
              <div className="relative shrink-0 size-[12px]" data-node-id="20:524" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
              </div>
            </div>
            <div className="bg-[var(--neutral\/white,white)] content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px pl-[8px] pr-[12px] py-[8px] relative rounded-[20px]" data-node-id="20:525" data-name="Frame">
              <div className="relative rounded-[14px] shrink-0 size-[56px]" data-node-id="20:526" data-name="Ảnh/Bánh căn">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgNhBanhCan} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0" data-node-id="20:527" data-name="Frame">
                <p className="font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--neutral\/ink,#0e1730)] w-[210px]" data-node-id="20:528">
                  Bánh căn Nhà Chung
                </p>
                <p className="font-['Be_Vietnam_Pro'] font-medium leading-[1.4] relative shrink-0 text-[13px] text-[color:var(--neutral\/ink-2,#5b6585)] w-[210px]" data-node-id="20:529">
                  🍜 Quán local, xếp hàng 15 phút
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="20:530" data-name="Frame">
            <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0" data-node-id="20:531" data-name="Frame">
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--brand\/navy,#193376)] tracking-[0.06px] whitespace-nowrap" data-node-id="20:532">
                15:00
              </p>
              <div className="relative shrink-0 size-[12px]" data-node-id="20:533" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
              </div>
            </div>
            <div className="bg-[var(--neutral\/white,white)] content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px pl-[8px] pr-[12px] py-[8px] relative rounded-[20px]" data-node-id="20:534" data-name="Frame">
              <div className="relative rounded-[14px] shrink-0 size-[56px]" data-node-id="20:535" data-name="Ảnh/Thung lũng">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgNhThungLung} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0" data-node-id="20:536" data-name="Frame">
                <p className="font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--neutral\/ink,#0e1730)] w-[210px]" data-node-id="20:537">
                  Thung lũng Tình Yêu
                </p>
                <p className="font-['Be_Vietnam_Pro'] font-medium leading-[1.4] relative shrink-0 text-[13px] text-[color:var(--neutral\/ink-2,#5b6585)] w-[210px]" data-node-id="20:538">
                  🎟️ Vé 250k · nên đi trước 17h
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[var(--brand\/sun-soft,#fff4cc)] content-stretch flex gap-[10px] items-center px-[14px] py-[12px] relative rounded-[20px] shrink-0 w-full" data-node-id="20:539" data-name="Lali tip">
          <div className="bg-[var(--brand\/cyan-soft,#ddf4fc)] overflow-clip relative rounded-[999px] shrink-0 size-[36px]" data-node-id="20:540" data-name="Lali Avatar">
            <div className="absolute left-0 size-[36px] top-[2.88px]" data-node-id="20:541" data-name="Mascot / Lali">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMascotLali} />
            </div>
          </div>
          <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-medium leading-[1.4] not-italic relative shrink-0 text-[13px] text-[color:var(--brand\/navy,#193376)] w-[270px]" data-node-id="20:559">
            Mẹo của Lali: 5h sáng Cầu Đất chỉ 12°C, nhớ mang áo khoác dày nha!
          </p>
        </div>
      </div>
      <a className="absolute bg-[var(--brand\/navy,#193376)] content-stretch cursor-pointer drop-shadow-[0px_16px_20px_rgba(25,51,118,0.22)] flex gap-[8px] items-center left-[94px] px-[24px] py-[16px] rounded-[999px] top-[754px]" data-node-id="20:560" data-name="Button">
        <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[15px] text-[color:var(--neutral\/white,white)] text-left whitespace-nowrap" data-node-id="I20:560;11:3">
          ✨ Nhờ Lali chỉnh lịch
        </p>
      </a>
    </div>
  );
}