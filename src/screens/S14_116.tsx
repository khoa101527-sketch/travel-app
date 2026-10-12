const imgIcon = "assets/8b16ed28b88a.svg";
const imgNhPhuQuc = "assets/cb2376f3d6b8.jpg";
const imgNhSaPa = "assets/8faa7974e086.jpg";
const imgSwipeCardDaLt = "assets/0fbc49a4ecb1.jpg";
const imgEllipse = "assets/10e1cd702430.svg";
const imgIconSearch = "assets/eccf1fd82878.svg";
const imgIconFilter = "assets/ff231886f61c.svg";
const imgIconStar = "assets/1f94ae0b0e8a.svg";
const imgIconPin = "assets/2ca1adf50fdf.svg";
const imgAvatar = "assets/a9abefb23c85.svg";
const imgAvatar1 = "assets/1519b4315d55.svg";
const imgAvatar2 = "assets/9f292ea98546.svg";
const imgIconChat = "assets/1c840f61b06d.svg";
const imgIconClose = "assets/3577f574007b.svg";
const imgIconUndo = "assets/809d25113733.svg";
const imgIconHeart = "assets/0a527d364f8b.svg";
const imgIconHome = "assets/0a0922c356de.svg";
const imgIconCompass = "assets/0b01e3489b69.svg";
const imgIconLuggage = "assets/8875e6118b4b.svg";
const imgIconTicket = "assets/3a757b2b53ed.svg";
const imgIconUser = "assets/c899e45db393.svg";

type ButtonProps = {
  className?: string;
  nhan?: string;
  type?: "Accent";
};

function Button({ className, nhan = "Đặt ngay", type = "Accent" }: ButtonProps) {
  return (
    <div className={className || "bg-[var(--brand\\/sun,#ffd23f)] content-stretch flex gap-[8px] items-center px-[24px] py-[16px] relative rounded-[999px]"} data-node-id="11:6">
      <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[15px] text-[color:var(--brand\/navy,#193376)] whitespace-nowrap" data-node-id="11:7">
        {nhan}
      </p>
      <div className="relative shrink-0 size-[24px]" data-node-id="11:8" data-name="Icon">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
      </div>
    </div>
  );
}

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

export default function Screen_14_116() {
  return (
    <div className="relative size-full" data-node-id="14:116" style={{ backgroundImage: "linear-gradient(180deg, rgb(255, 245, 209) 0%, rgba(242, 247, 252, 0) 40%), linear-gradient(90deg, rgb(243, 247, 252) 0%, rgb(243, 247, 252) 100%)" }} data-name="02 · Khám phá">
      <div className="absolute left-[-80px] size-[240px] top-[380px]" data-node-id="14:117" data-name="Ellipse">
        <div className="absolute inset-[-29.17%]">
          <img alt="" className="block max-w-none size-full" src={imgEllipse} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] left-[32px] not-italic text-[15px] text-[color:var(--neutral\/ink,#0e1730)] top-[16px] whitespace-nowrap" data-node-id="14:118">
        9:41
      </p>
      <div className="absolute content-stretch flex h-[48px] items-center justify-between left-[16px] top-[52px] w-[358px]" data-node-id="14:119" data-name="Header">
        <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="14:120" data-name="Frame">
          <p className="font-['Be_Vietnam_Pro'] font-medium leading-[1.4] relative shrink-0 text-[13px] text-[color:var(--neutral\/ink-2,#5b6585)]" data-node-id="14:121">
            Lướt để khám phá
          </p>
          <p className="font-['Be_Vietnam_Pro'] font-extrabold leading-[1.2] relative shrink-0 text-[30px] text-[color:var(--brand\/navy,#193376)] tracking-[-0.45px]" data-node-id="14:122">
            Hôm nay đi đâu?
          </p>
        </div>
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="14:123" data-name="Frame">
          <div className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch flex items-start p-[12px] relative rounded-[999px] shrink-0" data-node-id="14:124" data-name="Frame">
            <div className="relative shrink-0 size-[24px]" data-node-id="14:125" data-name="Icon/search">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSearch} />
            </div>
          </div>
          <div className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch flex items-start p-[12px] relative rounded-[999px] shrink-0" data-node-id="14:128" data-name="Frame">
            <div className="relative shrink-0 size-[24px]" data-node-id="14:129" data-name="Icon/filter">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconFilter} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[8px] items-start left-[16px] top-[116px]" data-node-id="14:133" data-name="Bộ lọc">
        <Chip className="bg-[var(--brand\/navy,#193376)] content-stretch flex items-center px-[16px] py-[10px] relative rounded-[999px] shrink-0" nhan="Tất cả" state="Đang chọn" />
        <Chip className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch flex items-center px-[16px] py-[10px] relative rounded-[999px] shrink-0" nhan="⛰️ Núi" />
        <Chip className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch flex items-center px-[16px] py-[10px] relative rounded-[999px] shrink-0" />
        <Chip className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch flex items-center px-[16px] py-[10px] relative rounded-[999px] shrink-0" nhan="🏝️ Resort" />
        <Chip className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch flex items-center px-[16px] py-[10px] relative rounded-[999px] shrink-0" nhan="🎒 Tour" />
      </div>
      <div className="absolute flex h-[489.728px] items-center justify-center left-[22.82px] top-[159.14px] w-[368.365px]" data-node-id="14:144">
        <div className="flex-none rotate-9">
          <div className="h-[448px] opacity-90 relative rounded-[32px] w-[302px]" data-name="Ảnh/Phú Quốc">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgNhPhuQuc} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[498.357px] items-center justify-center left-[-6.3px] top-[150.82px] w-[382.608px]" data-node-id="14:145">
        <div className="-rotate-8 flex-none">
          <div className="h-[458px] opacity-95 relative rounded-[32px] w-[322px]" data-name="Ảnh/Sa Pa">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgNhSaPa} />
          </div>
        </div>
      </div>
      <a className="absolute block cursor-pointer h-[468px] left-[24px] overflow-clip rounded-[32px] shadow-[0px_16px_40px_-8px_rgba(25,51,118,0.22)] top-[172px] w-[342px]" data-node-id="14:146" data-name="Swipe Card/Đà Lạt">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgSwipeCardDaLt} />
        <div className="absolute backdrop-blur-[12px] bg-[var(--glass\/light,rgba(255,255,255,0.62))] border border-[var(--glass\/stroke,rgba(255,255,255,0.7))] border-solid content-stretch flex items-center left-[16px] px-[12px] py-[8px] rounded-[999px] top-[16px]" data-node-id="14:148" data-name="Frame">
          <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--brand\/navy,#193376)] text-left tracking-[0.06px] whitespace-nowrap" data-node-id="14:147">
            🔥 Hot tuần này
          </p>
        </div>
        <div className="absolute content-stretch flex gap-[4px] items-start left-[16px] top-[60px]" data-node-id="14:149" data-name="Pager">
          <div className="bg-[var(--neutral\/white,white)] h-[4px] relative rounded-[2px] shrink-0 w-[24px]" data-node-id="14:150" data-name="Rectangle" />
          <div className="bg-[var(--neutral\/white,white)] h-[4px] relative rounded-[2px] shrink-0 w-[10px]" data-node-id="14:151" data-name="Rectangle" />
          <div className="bg-[var(--neutral\/white,white)] h-[4px] relative rounded-[2px] shrink-0 w-[10px]" data-node-id="14:152" data-name="Rectangle" />
          <div className="bg-[var(--neutral\/white,white)] h-[4px] relative rounded-[2px] shrink-0 w-[10px]" data-node-id="14:153" data-name="Rectangle" />
        </div>
        <div className="absolute backdrop-blur-[12px] bg-[var(--glass\/light,rgba(255,255,255,0.62))] border border-[var(--glass\/stroke,rgba(255,255,255,0.7))] border-solid content-stretch flex gap-[6px] items-center left-[249px] px-[12px] py-[8px] rounded-[999px] top-[16px]" data-node-id="14:157" data-name="Frame">
          <div className="relative shrink-0 size-[14px]" data-node-id="14:154" data-name="Icon/star">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconStar} />
          </div>
          <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--brand\/navy,#193376)] text-left tracking-[0.06px] whitespace-nowrap" data-node-id="14:156">
            4,8
          </p>
        </div>
        <div className="absolute backdrop-blur-[12px] bg-[var(--glass\/dark,rgba(14,23,48,0.38))] border border-[var(--glass\/stroke,rgba(255,255,255,0.7))] border-solid content-stretch flex flex-col gap-[10px] items-start left-[12px] p-[16px] rounded-[24px] top-[224px] w-[318px]" data-node-id="14:158" data-name="Info">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="14:159" data-name="Frame">
            <div className="relative shrink-0 size-[14px]" data-node-id="14:160" data-name="Icon/pin">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPin} />
            </div>
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-medium leading-[1.4] not-italic relative shrink-0 text-[13px] text-[color:var(--neutral\/white,white)] text-left whitespace-nowrap" data-node-id="14:163">{`Lâm Đồng · Núi & đồi`}</p>
          </div>
          <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-bold leading-[1.25] not-italic relative shrink-0 text-[22px] text-[color:var(--neutral\/white,white)] text-left tracking-[-0.22px] w-[286px]" data-node-id="14:164">
            Đồi chè Cầu Đất săn mây lúc bình minh
          </p>
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="14:165" data-name="Stats">
            <div className="content-stretch flex isolate items-center relative shrink-0" data-node-id="14:166" data-name="Avatar Stack">
              <div className="mr-[-10px] relative shrink-0 size-[28px] z-[4]" data-node-id="I14:166;11:155" data-name="Avatar">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvatar} />
              </div>
              <div className="mr-[-10px] relative shrink-0 size-[28px] z-[3]" data-node-id="I14:166;11:156" data-name="Avatar">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvatar1} />
              </div>
              <div className="mr-[-10px] relative shrink-0 size-[28px] z-[2]" data-node-id="I14:166;11:157" data-name="Avatar">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvatar2} />
              </div>
              <div className="bg-[var(--brand\/sun,#ffd23f)] border-2 border-[var(--neutral\/white,white)] border-solid content-stretch flex items-start px-[10px] py-[6px] relative rounded-[999px] shrink-0 z-[1]" data-node-id="I14:166;11:158" data-name="Count">
                <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--brand\/navy,#193376)] text-left tracking-[0.06px] whitespace-nowrap" data-node-id="I14:166;11:159">
                  +3,4k
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-medium leading-[1.4] not-italic relative shrink-0 text-[13px] text-[color:var(--neutral\/white,white)] text-left whitespace-nowrap" data-node-id="14:172">
              đã đến
            </p>
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="14:173" data-name="Frame">
              <div className="relative shrink-0 size-[16px]" data-node-id="14:174" data-name="Icon/chat">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChat} />
              </div>
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-medium leading-[1.4] not-italic relative shrink-0 text-[13px] text-[color:var(--neutral\/white,white)] text-left whitespace-nowrap" data-node-id="14:176">
                1,2k
              </p>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="14:177" data-name="Footer">
            <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.3] not-italic relative shrink-0 text-left whitespace-nowrap" data-node-id="14:178" data-name="Frame">
              <p className="font-['Be_Vietnam_Pro'] font-semibold relative shrink-0 text-[12px] text-[color:var(--neutral\/white,white)] tracking-[0.06px]" data-node-id="14:179">
                Tour 2N1Đ từ
              </p>
              <p className="font-['Be_Vietnam_Pro'] font-bold relative shrink-0 text-[18px] text-[color:var(--brand\/sun,#ffd23f)] tracking-[-0.09px]" data-node-id="14:180">
                1.590.000đ
              </p>
            </div>
            <Button className="bg-[var(--brand\/sun,#ffd23f)] content-stretch cursor-pointer flex gap-[8px] items-center px-[24px] py-[16px] relative rounded-[999px] shrink-0" nhan="Xem & đặt" />
          </div>
        </div>
      </a>
      <div className="absolute content-stretch flex gap-[20px] items-center left-[91px] top-[656px]" data-node-id="14:188" data-name="Actions">
        <div className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch drop-shadow-[0px_12px_16px_rgba(25,51,118,0.12)] flex items-start p-[16px] relative rounded-[999px] shrink-0" data-node-id="14:189" data-name="Btn/close">
          <div className="relative shrink-0 size-[26px]" data-node-id="14:190" data-name="Icon/close">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconClose} />
          </div>
        </div>
        <div className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch drop-shadow-[0px_12px_16px_rgba(25,51,118,0.12)] flex items-start p-[12px] relative rounded-[999px] shrink-0" data-node-id="14:192" data-name="Btn/undo">
          <div className="relative shrink-0 size-[20px]" data-node-id="14:193" data-name="Icon/undo">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconUndo} />
          </div>
        </div>
        <div className="bg-[var(--brand\/navy,#193376)] content-stretch drop-shadow-[0px_12px_16px_rgba(25,51,118,0.12)] flex items-start p-[18px] relative rounded-[999px] shrink-0" data-node-id="14:196" data-name="Btn/heart">
          <div className="relative shrink-0 size-[28px]" data-node-id="14:197" data-name="Icon/heart">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHeart} />
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[12px] bg-[var(--glass\/light,rgba(255,255,255,0.62))] border border-[var(--glass\/stroke,rgba(255,255,255,0.7))] border-solid content-stretch flex h-[64px] items-center justify-between left-[16px] p-[8px] rounded-[999px] top-[760px] w-[358px]" data-node-id="14:199" data-name="Tab Bar">
        <a className="content-stretch cursor-pointer flex items-center p-[12px] relative rounded-[999px] shrink-0" data-node-id="I14:199;11:42" data-name="Item/Tổng quan">
          <div className="relative shrink-0 size-[24px]" data-node-id="I14:199;11:43" data-name="Icon/home">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome} />
          </div>
        </a>
        <div className="bg-[var(--brand\/navy,#193376)] content-stretch flex gap-[6px] items-center px-[16px] py-[12px] relative rounded-[999px] shrink-0" data-node-id="I14:199;11:45" data-name="Item/Khám phá">
          <div className="relative shrink-0 size-[24px]" data-node-id="I14:199;11:46" data-name="Icon/compass">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCompass} />
          </div>
          <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--neutral\/white,white)] tracking-[0.06px] whitespace-nowrap" data-node-id="I14:199;11:49">
            Khám phá
          </p>
        </div>
        <a className="content-stretch cursor-pointer flex items-center p-[12px] relative rounded-[999px] shrink-0" data-node-id="I14:199;11:50" data-name="Item/Chuyến đi">
          <div className="relative shrink-0 size-[24px]" data-node-id="I14:199;11:51" data-name="Icon/luggage">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLuggage} />
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex items-center p-[12px] relative rounded-[999px] shrink-0" data-node-id="I14:199;11:54" data-name="Item/Voucher">
          <div className="relative shrink-0 size-[24px]" data-node-id="I14:199;11:55" data-name="Icon/ticket">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTicket} />
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex items-center p-[12px] relative rounded-[999px] shrink-0" data-node-id="I14:199;11:58" data-name="Item/Hồ sơ">
          <div className="relative shrink-0 size-[24px]" data-node-id="I14:199;11:59" data-name="Icon/user">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconUser} />
          </div>
        </a>
      </div>
    </div>
  );
}