const imgNhDaLt = "assets/0112d33442f0.jpg";
const imgNhPhuQuc = "assets/ec1fcfd081b0.jpg";
const imgIconSearch = "assets/eccf1fd82878.svg";
const imgIconCalendar = "assets/8f59107e5c41.svg";
const imgIconUsers = "assets/7e961d270127.svg";
const imgIconTicket = "assets/69b3b3d0e67d.svg";
const imgIcon = "assets/150ff9bb5561.svg";
const imgIconArrow = "assets/94fc6f678ef7.svg";
const imgMascotLali = "assets/329fe00c8c71.svg";
const imgIconArrow1 = "assets/cc94cf32fcee.svg";
const imgIconHome = "assets/0a0922c356de.svg";
const imgIconCompass = "assets/d8fc58729831.svg";
const imgIconLuggage = "assets/17aeec250f62.svg";
const imgIconTicket1 = "assets/3a757b2b53ed.svg";
const imgIconUser = "assets/c899e45db393.svg";

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

export default function Screen_20_362() {
  return (
    <div className="relative size-full" data-node-id="20:362" style={{ backgroundImage: "linear-gradient(180deg, rgb(221, 244, 252) 0%, rgba(243, 247, 252, 0) 45%), linear-gradient(90deg, rgb(243, 247, 252) 0%, rgb(243, 247, 252) 100%)" }} data-name="08 · Chuyến đi">
      <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] left-[32px] not-italic text-[15px] text-[color:var(--neutral\/ink,#0e1730)] top-[16px] whitespace-nowrap" data-node-id="20:363">
        9:41
      </p>
      <div className="absolute content-stretch flex h-[48px] items-center justify-between left-[16px] top-[52px] w-[358px]" data-node-id="20:368" data-name="Header">
        <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-extrabold leading-[1.2] not-italic relative shrink-0 text-[30px] text-[color:var(--brand\/navy,#193376)] tracking-[-0.45px] whitespace-nowrap" data-node-id="20:369">
          Chuyến đi của tôi
        </p>
        <div className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch flex items-start p-[12px] relative rounded-[999px] shrink-0" data-node-id="20:364" data-name="Btn/search">
          <div className="relative shrink-0 size-[24px]" data-node-id="20:365" data-name="Icon/search">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSearch} />
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--brand\/cyan-soft,#ddf4fc)] content-stretch flex gap-[4px] items-start left-[16px] p-[4px] rounded-[999px] top-[112px] w-[358px]" data-node-id="20:370" data-name="Segment">
        <div className="bg-[var(--neutral\/white,white)] content-stretch drop-shadow-[0px_12px_16px_rgba(25,51,118,0.12)] flex flex-[1_0_0] items-start justify-center min-w-px py-[10px] relative rounded-[999px]" data-node-id="20:371" data-name="Frame">
          <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[15px] text-[color:var(--brand\/navy,#193376)] whitespace-nowrap" data-node-id="20:372">
            🎫 Đơn đặt
          </p>
        </div>
        <a className="content-stretch cursor-pointer flex flex-[1_0_0] items-start justify-center min-w-px py-[10px] relative rounded-[999px]" data-node-id="20:373" data-name="Frame">
          <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[15px] text-[color:var(--neutral\/ink-2,#5b6585)] text-left whitespace-nowrap" data-node-id="20:374">
            🗺️ Lịch trình
          </p>
        </a>
      </div>
      <div className="absolute content-stretch flex gap-[8px] items-start left-[16px] top-[172px]" data-node-id="20:375" data-name="Frame">
        <Chip className="bg-[var(--brand\/navy,#193376)] content-stretch flex items-center px-[16px] py-[10px] relative rounded-[999px] shrink-0" nhan="Sắp tới · 2" state="Đang chọn" />
        <Chip className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch flex items-center px-[16px] py-[10px] relative rounded-[999px] shrink-0" nhan="Đã đi · 5" />
        <Chip className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch flex items-center px-[16px] py-[10px] relative rounded-[999px] shrink-0" nhan="Đã huỷ" />
      </div>
      <div className="absolute bg-[var(--neutral\/white,white)] content-stretch flex flex-col items-start left-[16px] overflow-clip rounded-[28px] shadow-[0px_12px_32px_0px_rgba(25,51,118,0.12)] top-[228px] w-[358px]" data-node-id="20:382" data-name="Order/Đà Lạt">
        <div className="h-[150px] overflow-clip relative shrink-0 w-[358px]" data-node-id="20:383" data-name="Ảnh/Đà Lạt">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNhDaLt} />
          <div className="absolute backdrop-blur-[12px] bg-[var(--glass\/light,rgba(255,255,255,0.62))] border border-[var(--glass\/stroke,rgba(255,255,255,0.7))] border-solid content-stretch flex items-center left-[14px] px-[12px] py-[8px] rounded-[999px] top-[14px]" data-node-id="20:385" data-name="Frame">
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--brand\/navy,#193376)] tracking-[0.06px] whitespace-nowrap" data-node-id="20:384">
              ⏳ Còn 34 ngày
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[16px] relative shrink-0 w-full" data-node-id="20:386" data-name="Frame">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="20:387" data-name="Frame">
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-bold leading-[1.3] not-italic relative shrink-0 text-[18px] text-[color:var(--neutral\/ink,#0e1730)] tracking-[-0.09px] whitespace-nowrap" data-node-id="20:388">
              Tour săn mây Cầu Đất
            </p>
            <div className="bg-[var(--brand\/cyan-soft,#ddf4fc)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="20:389" data-name="Frame">
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold font-semibold leading-[1.3] relative shrink-0 text-[12px] text-[color:var(--brand\/navy,#193376)] tracking-[0.06px] whitespace-nowrap" data-node-id="20:390" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                ✓ Đã thanh toán
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[14px] items-start relative shrink-0" data-node-id="20:391" data-name="Frame">
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="20:392" data-name="Frame">
              <div className="relative shrink-0 size-[14px]" data-node-id="20:393" data-name="Icon/calendar">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCalendar} />
              </div>
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-medium leading-[1.4] not-italic relative shrink-0 text-[13px] text-[color:var(--neutral\/ink-2,#5b6585)] whitespace-nowrap" data-node-id="20:396">
                T7, 15/11
              </p>
            </div>
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="20:397" data-name="Frame">
              <div className="relative shrink-0 size-[14px]" data-node-id="20:398" data-name="Icon/users">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconUsers} />
              </div>
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-medium leading-[1.4] not-italic relative shrink-0 text-[13px] text-[color:var(--neutral\/ink-2,#5b6585)] whitespace-nowrap" data-node-id="20:401">
                2 người
              </p>
            </div>
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="20:402" data-name="Frame">
              <div className="relative shrink-0 size-[14px]" data-node-id="20:403" data-name="Icon/ticket">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTicket} />
              </div>
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-medium leading-[1.4] not-italic relative shrink-0 text-[13px] text-[color:var(--neutral\/ink-2,#5b6585)] whitespace-nowrap" data-node-id="20:406">
                LALI-8K2Q
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="20:407" data-name="Frame">
            <div className="bg-[var(--brand\/navy,#193376)] content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative rounded-[999px] shrink-0" data-node-id="20:408" data-name="Button">
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[15px] text-[color:var(--neutral\/white,white)] whitespace-nowrap" data-node-id="I20:408;11:3">
                Xem vé
              </p>
              <div className="relative shrink-0 size-[24px]" data-node-id="I20:408;11:4" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
              </div>
            </div>
            <a className="backdrop-blur-[12px] bg-[var(--neutral\/bg,#f3f7fc)] border border-[var(--glass\/stroke,rgba(255,255,255,0.7))] border-solid content-stretch cursor-pointer flex gap-[8px] items-center px-[16px] py-[10px] relative rounded-[999px] shrink-0" data-node-id="20:412" data-name="Button">
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[15px] text-[color:var(--brand\/navy,#193376)] text-left whitespace-nowrap" data-node-id="I20:412;11:11">
                ✨ Hỏi Lali
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--neutral\/white,white)] content-stretch flex gap-[12px] items-center left-[16px] pl-[10px] pr-[14px] py-[10px] rounded-[24px] top-[535px] w-[358px]" data-node-id="20:416" data-name="Order/Phú Quốc">
        <div className="relative rounded-[16px] shrink-0 size-[72px]" data-node-id="20:417" data-name="Ảnh/Phú Quốc">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgNhPhuQuc} />
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-node-id="20:418" data-name="Frame">
          <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[15px] text-[color:var(--neutral\/ink,#0e1730)] whitespace-nowrap" data-node-id="20:419">
            Combo resort Phú Quốc 3N2Đ
          </p>
          <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-medium leading-[1.4] not-italic relative shrink-0 text-[13px] text-[color:var(--neutral\/ink-2,#5b6585)] whitespace-nowrap" data-node-id="20:420">
            20/12 · 2 người · 4.990.000đ
          </p>
          <div className="bg-[var(--brand\/sun-soft,#fff4cc)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="20:421" data-name="Frame">
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--brand\/navy,#193376)] tracking-[0.06px] whitespace-nowrap" data-node-id="20:422">
              ⏰ Chờ thanh toán
            </p>
          </div>
        </div>
        <div className="relative shrink-0 size-[20px]" data-node-id="20:423" data-name="Icon/arrow">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconArrow} />
        </div>
      </div>
      <a className="absolute bg-[var(--brand\/navy,#193376)] content-stretch cursor-pointer flex gap-[12px] items-center left-[16px] p-[14px] rounded-[24px] top-[640px] w-[358px]" data-node-id="20:425" data-name="AI Itinerary">
        <div className="bg-[var(--brand\/cyan-soft,#ddf4fc)] overflow-clip relative rounded-[999px] shrink-0 size-[40px]" data-node-id="20:426" data-name="Lali Avatar">
          <div className="absolute left-0 size-[40px] top-[3.2px]" data-node-id="20:427" data-name="Mascot / Lali">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMascotLali} />
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic relative text-left whitespace-nowrap" data-node-id="20:443" data-name="Frame">
          <p className="font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--neutral\/white,white)]" data-node-id="20:444">
            Lịch trình Đà Lạt 3N2Đ đã sẵn sàng
          </p>
          <p className="font-['Be_Vietnam_Pro'] font-medium leading-[1.4] relative shrink-0 text-[13px] text-[color:var(--brand\/cyan-soft,#ddf4fc)]" data-node-id="20:445">
            Lali gắn vào chuyến 15/11 · 9 điểm đến
          </p>
        </div>
        <div className="relative shrink-0 size-[20px]" data-node-id="20:446" data-name="Icon/arrow">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconArrow1} />
        </div>
      </a>
      <div className="absolute backdrop-blur-[12px] bg-[var(--glass\/light,rgba(255,255,255,0.62))] border border-[var(--glass\/stroke,rgba(255,255,255,0.7))] border-solid content-stretch flex h-[64px] items-center justify-between left-[16px] p-[8px] rounded-[999px] top-[760px] w-[358px]" data-node-id="20:448" data-name="Tab Bar">
        <a className="content-stretch cursor-pointer flex items-center overflow-clip p-[12px] relative rounded-[999px] shrink-0" data-node-id="I20:448;11:63" data-name="Item/Tổng quan">
          <div className="relative shrink-0 size-[24px]" data-node-id="I20:448;11:64" data-name="Icon/home">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome} />
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex items-center overflow-clip p-[12px] relative rounded-[999px] shrink-0" data-node-id="I20:448;11:66" data-name="Item/Khám phá">
          <div className="relative shrink-0 size-[24px]" data-node-id="I20:448;11:67" data-name="Icon/compass">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCompass} />
          </div>
        </a>
        <div className="bg-[var(--brand\/navy,#193376)] content-stretch flex gap-[6px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[999px] shrink-0" data-node-id="I20:448;11:70" data-name="Item/Chuyến đi">
          <div className="relative shrink-0 size-[24px]" data-node-id="I20:448;11:71" data-name="Icon/luggage">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLuggage} />
          </div>
          <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--neutral\/white,white)] tracking-[0.06px] whitespace-nowrap" data-node-id="I20:448;11:74">
            Chuyến đi
          </p>
        </div>
        <a className="content-stretch cursor-pointer flex items-center overflow-clip p-[12px] relative rounded-[999px] shrink-0" data-node-id="I20:448;11:75" data-name="Item/Voucher">
          <div className="relative shrink-0 size-[24px]" data-node-id="I20:448;11:76" data-name="Icon/ticket">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTicket1} />
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex items-center overflow-clip p-[12px] relative rounded-[999px] shrink-0" data-node-id="I20:448;11:79" data-name="Item/Hồ sơ">
          <div className="relative shrink-0 size-[24px]" data-node-id="I20:448;11:80" data-name="Icon/user">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconUser} />
          </div>
        </a>
      </div>
    </div>
  );
}