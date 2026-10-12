const imgMascotLali = "assets/339f1977f0c8.svg";
const imgLine = "assets/75b2f505ed20.svg";
const imgIconHome = "assets/0a0922c356de.svg";
const imgIconCompass = "assets/d8fc58729831.svg";
const imgIconLuggage = "assets/8875e6118b4b.svg";
const imgIconTicket = "assets/216049a5298c.svg";
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

export default function Screen_20_564() {
  return (
    <div className="relative size-full" data-node-id="20:564" style={{ backgroundImage: "linear-gradient(180deg, rgb(255, 244, 204) 0%, rgba(243, 247, 252, 0) 45%), linear-gradient(90deg, rgb(243, 247, 252) 0%, rgb(243, 247, 252) 100%)" }} data-name="10 · Voucher">
      <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] left-[32px] not-italic text-[15px] text-[color:var(--neutral\/ink,#0e1730)] top-[16px] whitespace-nowrap" data-node-id="20:565">
        9:41
      </p>
      <div className="absolute content-stretch flex h-[48px] items-center justify-between left-[16px] top-[52px] w-[358px]" data-node-id="20:582" data-name="Header">
        <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-extrabold leading-[1.2] not-italic relative shrink-0 text-[30px] text-[color:var(--brand\/navy,#193376)] tracking-[-0.45px] whitespace-nowrap" data-node-id="20:583">
          Voucher
        </p>
        <div className="relative shrink-0 size-[72px]" data-node-id="20:566" data-name="Mascot / Lali">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMascotLali} />
        </div>
      </div>
      <div className="absolute bg-gradient-to-r content-stretch flex from-[#193376] gap-[12px] items-center left-[16px] px-[18px] py-[16px] rounded-[24px] to-[#04a8dc] top-[116px] w-[358px]" data-node-id="20:584" data-name="Points">
        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic relative whitespace-nowrap" data-node-id="20:585" data-name="Frame">
          <p className="font-['Be_Vietnam_Pro'] font-medium leading-[1.4] relative shrink-0 text-[13px] text-[color:var(--brand\/cyan-soft,#ddf4fc)]" data-node-id="20:586">
            Điểm Lali của bạn
          </p>
          <p className="font-['Be_Vietnam_Pro'] font-extrabold leading-[1.2] relative shrink-0 text-[30px] text-[color:var(--neutral\/white,white)] tracking-[-0.45px]" data-node-id="20:587">
            1.240 điểm
          </p>
        </div>
        <div className="bg-[var(--brand\/sun,#ffd23f)] content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative rounded-[999px] shrink-0" data-node-id="20:588" data-name="Button">
          <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[15px] text-[color:var(--brand\/navy,#193376)] whitespace-nowrap" data-node-id="I20:588;11:7">
            Đổi quà
          </p>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[8px] items-start left-[16px] top-[220px]" data-node-id="20:592" data-name="Frame">
        <Chip className="bg-[var(--brand\/navy,#193376)] content-stretch flex items-center px-[16px] py-[10px] relative rounded-[999px] shrink-0" nhan="Tất cả" state="Đang chọn" />
        <Chip className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch flex items-center px-[16px] py-[10px] relative rounded-[999px] shrink-0" nhan="🎒 Tour" />
        <Chip className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch flex items-center px-[16px] py-[10px] relative rounded-[999px] shrink-0" nhan="🏨 Khách sạn" />
        <Chip className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch flex items-center px-[16px] py-[10px] relative rounded-[999px] shrink-0" nhan="✈️ Vé bay" />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[16px] top-[276px] w-[358px]" data-node-id="20:601" data-name="List">
        <div className="bg-[var(--neutral\/white,white)] content-stretch flex items-center overflow-clip pr-[12px] relative rounded-[20px] shrink-0 w-full" data-node-id="20:602" data-name="Voucher/LALIGENZ · Giảm 10% mọi tour">
          <div className="bg-[var(--brand\/navy,#193376)] content-stretch flex flex-col h-[92px] items-center justify-center relative shrink-0 w-[88px]" data-node-id="20:603" data-name="Frame">
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-bold leading-[1.25] not-italic relative shrink-0 text-[22px] text-[color:var(--neutral\/white,white)] tracking-[-0.22px] whitespace-nowrap" data-node-id="20:604">
              -10%
            </p>
          </div>
          <div className="flex h-[76px] items-center justify-center relative shrink-0 w-0" data-node-id="20:605">
            <div className="-rotate-90 flex-none">
              <div className="h-0 relative w-[76px]" data-name="Line">
                <div className="absolute inset-[-2px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine} />
                </div>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic px-[12px] py-[10px] relative" data-node-id="20:606" data-name="Frame">
            <p className="font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--neutral\/ink,#0e1730)] w-[170px]" data-node-id="20:607">
              LALIGENZ · Giảm 10% mọi tour
            </p>
            <p className="font-['Be_Vietnam_Pro'] font-medium leading-[1.4] relative shrink-0 text-[13px] text-[color:var(--neutral\/ink-2,#5b6585)] whitespace-nowrap" data-node-id="20:608">
              Tối đa 300k · HSD 30/11
            </p>
          </div>
          <div className="bg-[var(--brand\/navy,#193376)] content-stretch flex items-start px-[14px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="20:609" data-name="Frame">
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--neutral\/white,white)] tracking-[0.06px] whitespace-nowrap" data-node-id="20:610">
              Dùng
            </p>
          </div>
        </div>
        <div className="bg-[var(--neutral\/white,white)] content-stretch flex items-center overflow-clip pr-[12px] relative rounded-[20px] shrink-0 w-full" data-node-id="20:611" data-name="Voucher/Cuối tuần chill">
          <div className="bg-[var(--brand\/sun,#ffd23f)] content-stretch flex flex-col h-[92px] items-center justify-center relative shrink-0 w-[88px]" data-node-id="20:612" data-name="Frame">
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-bold leading-[1.25] not-italic relative shrink-0 text-[22px] text-[color:var(--brand\/navy,#193376)] tracking-[-0.22px] whitespace-nowrap" data-node-id="20:613">
              -50k
            </p>
          </div>
          <div className="flex h-[76px] items-center justify-center relative shrink-0 w-0" data-node-id="20:614">
            <div className="-rotate-90 flex-none">
              <div className="h-0 relative w-[76px]" data-name="Line">
                <div className="absolute inset-[-2px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px px-[12px] py-[10px] relative" data-node-id="20:615" data-name="Frame">
            <div className="bg-[var(--brand\/sun-soft,#fff4cc)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="20:616" data-name="Frame">
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--status\/danger,#ef4b4b)] tracking-[0.06px] whitespace-nowrap" data-node-id="20:617">
                🔥 Sắp hết hạn
              </p>
            </div>
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[15px] text-[color:var(--neutral\/ink,#0e1730)] w-[170px]" data-node-id="20:618">
              Cuối tuần chill
            </p>
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-medium leading-[1.4] not-italic relative shrink-0 text-[13px] text-[color:var(--neutral\/ink-2,#5b6585)] whitespace-nowrap" data-node-id="20:619">
              Đơn từ 500k · HSD 20/10
            </p>
          </div>
          <div className="bg-[var(--brand\/navy,#193376)] content-stretch flex items-start px-[14px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="20:620" data-name="Frame">
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--neutral\/white,white)] tracking-[0.06px] whitespace-nowrap" data-node-id="20:621">
              Dùng
            </p>
          </div>
        </div>
        <div className="bg-[var(--neutral\/white,white)] content-stretch flex items-center overflow-clip pr-[12px] relative rounded-[20px] shrink-0 w-full" data-node-id="20:622" data-name="Voucher/Resort biển đầu tiên">
          <div className="bg-[var(--brand\/cyan,#04a8dc)] content-stretch flex flex-col h-[92px] items-center justify-center relative shrink-0 w-[88px]" data-node-id="20:623" data-name="Frame">
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-bold leading-[1.25] not-italic relative shrink-0 text-[22px] text-[color:var(--neutral\/white,white)] tracking-[-0.22px] whitespace-nowrap" data-node-id="20:624">
              -15%
            </p>
          </div>
          <div className="flex h-[76px] items-center justify-center relative shrink-0 w-0" data-node-id="20:625">
            <div className="-rotate-90 flex-none">
              <div className="h-0 relative w-[76px]" data-name="Line">
                <div className="absolute inset-[-2px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine} />
                </div>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic px-[12px] py-[10px] relative" data-node-id="20:626" data-name="Frame">
            <p className="font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--neutral\/ink,#0e1730)] w-[170px]" data-node-id="20:627">
              Resort biển đầu tiên
            </p>
            <p className="font-['Be_Vietnam_Pro'] font-medium leading-[1.4] relative shrink-0 text-[13px] text-[color:var(--neutral\/ink-2,#5b6585)] whitespace-nowrap" data-node-id="20:628">
              Khách mới · HSD 31/12
            </p>
          </div>
          <div className="bg-[var(--neutral\/bg,#f3f7fc)] content-stretch flex items-start px-[14px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="20:629" data-name="Frame">
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--brand\/navy,#193376)] tracking-[0.06px] whitespace-nowrap" data-node-id="20:630">
              Lưu
            </p>
          </div>
        </div>
        <div className="bg-[var(--neutral\/white,white)] content-stretch flex items-center overflow-clip pr-[12px] relative rounded-[20px] shrink-0 w-full" data-node-id="20:631" data-name="Voucher/Nhân đôi điểm Lali">
          <div className="bg-[var(--brand\/cyan-soft,#ddf4fc)] content-stretch flex flex-col h-[92px] items-center justify-center relative shrink-0 w-[88px]" data-node-id="20:632" data-name="Frame">
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-bold leading-[1.25] not-italic relative shrink-0 text-[22px] text-[color:var(--brand\/navy,#193376)] tracking-[-0.22px] whitespace-nowrap" data-node-id="20:633">
              x2
            </p>
          </div>
          <div className="flex h-[76px] items-center justify-center relative shrink-0 w-0" data-node-id="20:634">
            <div className="-rotate-90 flex-none">
              <div className="h-0 relative w-[76px]" data-name="Line">
                <div className="absolute inset-[-2px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine} />
                </div>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic px-[12px] py-[10px] relative" data-node-id="20:635" data-name="Frame">
            <p className="font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--neutral\/ink,#0e1730)] w-[170px]" data-node-id="20:636">
              Nhân đôi điểm Lali
            </p>
            <p className="font-['Be_Vietnam_Pro'] font-medium leading-[1.4] relative shrink-0 text-[13px] text-[color:var(--neutral\/ink-2,#5b6585)] whitespace-nowrap" data-node-id="20:637">
              Khi đặt tour Tây Bắc
            </p>
          </div>
          <div className="bg-[var(--neutral\/bg,#f3f7fc)] content-stretch flex items-start px-[14px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="20:638" data-name="Frame">
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--brand\/navy,#193376)] tracking-[0.06px] whitespace-nowrap" data-node-id="20:639">
              Lưu
            </p>
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[12px] bg-[var(--glass\/light,rgba(255,255,255,0.62))] border border-[var(--glass\/stroke,rgba(255,255,255,0.7))] border-solid content-stretch flex h-[64px] items-center justify-between left-[16px] p-[8px] rounded-[999px] top-[760px] w-[358px]" data-node-id="20:640" data-name="Tab Bar">
        <a className="content-stretch cursor-pointer flex items-center overflow-clip p-[12px] relative rounded-[999px] shrink-0" data-node-id="I20:640;11:84" data-name="Item/Tổng quan">
          <div className="relative shrink-0 size-[24px]" data-node-id="I20:640;11:85" data-name="Icon/home">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome} />
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex items-center overflow-clip p-[12px] relative rounded-[999px] shrink-0" data-node-id="I20:640;11:87" data-name="Item/Khám phá">
          <div className="relative shrink-0 size-[24px]" data-node-id="I20:640;11:88" data-name="Icon/compass">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCompass} />
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex items-center overflow-clip p-[12px] relative rounded-[999px] shrink-0" data-node-id="I20:640;11:91" data-name="Item/Chuyến đi">
          <div className="relative shrink-0 size-[24px]" data-node-id="I20:640;11:92" data-name="Icon/luggage">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLuggage} />
          </div>
        </a>
        <div className="bg-[var(--brand\/navy,#193376)] content-stretch flex gap-[6px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[999px] shrink-0" data-node-id="I20:640;11:95" data-name="Item/Voucher">
          <div className="relative shrink-0 size-[24px]" data-node-id="I20:640;11:96" data-name="Icon/ticket">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTicket} />
          </div>
          <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--neutral\/white,white)] tracking-[0.06px] whitespace-nowrap" data-node-id="I20:640;11:99">
            Voucher
          </p>
        </div>
        <a className="content-stretch cursor-pointer flex items-center overflow-clip p-[12px] relative rounded-[999px] shrink-0" data-node-id="I20:640;11:100" data-name="Item/Hồ sơ">
          <div className="relative shrink-0 size-[24px]" data-node-id="I20:640;11:101" data-name="Icon/user">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconUser} />
          </div>
        </a>
      </div>
    </div>
  );
}