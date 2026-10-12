const imgBiuCmChao = "assets/a94b4eae002b.svg";
const imgNhDaLt = "assets/279b3e851fe8.jpg";
const imgIconArrow = "assets/36c54e81ec68.svg";
const imgMascotLali = "assets/60ba04a37908.svg";
const imgEllipse = "assets/e56d8dc799f9.svg";
const imgMascotLali1 = "assets/04720cfd9e84.svg";
const imgIconArrow1 = "assets/33314868c023.svg";
const imgIconMic = "assets/7d9fd89bf4e4.svg";
const imgIconCamera = "assets/0862f36a933d.svg";

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

export default function Screen_18_225() {
  return (
    <div className="relative size-full" data-node-id="18:225" style={{ backgroundImage: "linear-gradient(180deg, rgb(221, 244, 252) 0%, rgba(243, 247, 252, 0) 45%), linear-gradient(90deg, rgb(243, 247, 252) 0%, rgb(243, 247, 252) 100%)" }} data-name="03 · Chat với Lali">
      <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] left-[32px] not-italic text-[15px] text-[color:var(--neutral\/ink,#0e1730)] top-[16px] whitespace-nowrap" data-node-id="18:226">
        9:41
      </p>
      <div className="absolute content-stretch flex gap-[12px] items-center left-[16px] top-[50px]" data-node-id="18:227" data-name="Top Bar">
        <button className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch cursor-pointer flex items-start p-[12px] relative rounded-[999px] shrink-0" data-node-id="18:228" data-name="Btn/arrow">
          <div className="flex items-center justify-center relative shrink-0" data-node-id="18:229">
            <div className="flex-none rotate-180">
              <div className="relative size-[24px]" data-name="Icon/arrow">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconArrow} />
              </div>
            </div>
          </div>
        </button>
        <div className="bg-[var(--brand\/cyan-soft,#ddf4fc)] overflow-clip relative rounded-[999px] shrink-0 size-[44px]" data-node-id="18:231" data-name="Lali Avatar">
          <div className="absolute left-0 size-[44px] top-[3.52px]" data-node-id="18:232" data-name="Mascot / Lali">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMascotLali} />
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="18:249" data-name="Frame">
          <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-bold leading-[1.3] not-italic relative shrink-0 text-[18px] text-[color:var(--brand\/navy,#193376)] tracking-[-0.09px] whitespace-nowrap" data-node-id="18:250">
            Lali AI ✨
          </p>
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="18:251" data-name="Frame">
            <div className="relative shrink-0 size-[8px]" data-node-id="18:252" data-name="Ellipse">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
            </div>
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-medium leading-[1.4] not-italic relative shrink-0 text-[13px] text-[color:var(--neutral\/ink-2,#5b6585)] whitespace-nowrap" data-node-id="18:253">
              Sẵn sàng lên kèo
            </p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[16px] top-[112px] w-[358px]" data-node-id="18:254" data-name="Messages">
        <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-node-id="18:256" data-name="Msg/User">
          <div className="bg-[var(--brand\/navy,#193376)] content-stretch flex items-start px-[16px] py-[12px] relative rounded-bl-[22px] rounded-br-[6px] rounded-tl-[22px] rounded-tr-[22px] shrink-0" data-node-id="18:257" data-name="Bubble">
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-normal leading-[1.5] not-italic relative shrink-0 text-[15px] text-[color:var(--neutral\/white,white)] w-[250px]" data-node-id="18:258">
              Lên lịch Đà Lạt 3N2Đ giúp mình, ngân sách 3 triệu, thích chill với chụp ảnh 📸
            </p>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-end relative shrink-0" data-node-id="18:259" data-name="Msg/Lali">
          <div className="bg-[var(--brand\/cyan-soft,#ddf4fc)] overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-node-id="18:260" data-name="Lali Avatar">
            <div className="absolute left-0 size-[32px] top-[2.56px]" data-node-id="18:261" data-name="Mascot / Lali">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMascotLali1} />
            </div>
          </div>
          <div className="bg-[var(--neutral\/white,white)] content-stretch flex items-start px-[16px] py-[12px] relative rounded-bl-[6px] rounded-br-[22px] rounded-tl-[22px] rounded-tr-[22px] shrink-0" data-node-id="18:277" data-name="Bubble">
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-normal leading-[1.5] not-italic relative shrink-0 text-[15px] text-[color:var(--neutral\/ink,#0e1730)] w-[240px]" data-node-id="18:278">
              Okela! Lịch trình chill-chill, đủ góc sống ảo cho bạn nè 🌲
            </p>
          </div>
        </div>
        <div className="bg-[var(--neutral\/white,white)] content-stretch drop-shadow-[0px_12px_16px_rgba(25,51,118,0.12)] flex flex-col gap-[12px] items-start p-[16px] relative rounded-[24px] shrink-0 w-full" data-node-id="18:279" data-name="Card/Lịch trình">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="18:280" data-name="Head">
            <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="18:281" data-name="Frame">
              <p className="font-['Be_Vietnam_Pro'] font-bold leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--brand\/navy,#193376)] tracking-[-0.09px]" data-node-id="18:282">
                Đà Lạt 3N2Đ
              </p>
              <p className="font-['Be_Vietnam_Pro'] font-medium leading-[1.4] relative shrink-0 text-[13px] text-[color:var(--neutral\/ink-2,#5b6585)]" data-node-id="18:283">
                ~2.850.000đ · 2 người
              </p>
            </div>
            <div className="bg-[var(--brand\/sun-soft,#fff4cc)] content-stretch flex items-start px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-node-id="18:284" data-name="Frame">
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--brand\/navy,#193376)] tracking-[0.06px] whitespace-nowrap" data-node-id="18:285">
                ✨ AI tạo
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-node-id="18:286" data-name="Frame">
            <div className="bg-[var(--brand\/cyan-soft,#ddf4fc)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[36px]" data-node-id="18:287" data-name="Frame">
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--brand\/navy,#193376)] tracking-[0.06px] whitespace-nowrap" data-node-id="18:288">
                N1
              </p>
            </div>
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-medium leading-[1.4] not-italic relative shrink-0 text-[13px] text-[color:var(--neutral\/ink,#0e1730)] w-[250px]" data-node-id="18:289">
              Hồ Xuân Hương · Chợ đêm · Lẩu gà lá é
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-node-id="18:290" data-name="Frame">
            <div className="bg-[var(--brand\/cyan-soft,#ddf4fc)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[36px]" data-node-id="18:291" data-name="Frame">
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--brand\/navy,#193376)] tracking-[0.06px] whitespace-nowrap" data-node-id="18:292">
                N2
              </p>
            </div>
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-medium leading-[1.4] not-italic relative shrink-0 text-[13px] text-[color:var(--neutral\/ink,#0e1730)] w-[250px]" data-node-id="18:293">
              Săn mây Cầu Đất · Đồi chè · Cafe view rừng thông
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-node-id="18:294" data-name="Frame">
            <div className="bg-[var(--brand\/cyan-soft,#ddf4fc)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[36px]" data-node-id="18:295" data-name="Frame">
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--brand\/navy,#193376)] tracking-[0.06px] whitespace-nowrap" data-node-id="18:296">
                N3
              </p>
            </div>
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-medium leading-[1.4] not-italic relative shrink-0 text-[13px] text-[color:var(--neutral\/ink,#0e1730)] w-[250px]" data-node-id="18:297">
              Thung lũng Tình Yêu · Mua đặc sản về
            </p>
          </div>
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="18:298" data-name="Frame">
            <a className="bg-[var(--brand\/navy,#193376)] content-stretch cursor-pointer flex gap-[8px] items-center px-[16px] py-[12px] relative rounded-[999px] shrink-0" data-node-id="18:299" data-name="Button">
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[15px] text-[color:var(--neutral\/white,white)] text-left whitespace-nowrap" data-node-id="I18:299;11:3">
                Lưu vào Chuyến đi
              </p>
            </a>
            <div className="backdrop-blur-[12px] bg-[var(--neutral\/bg,#f3f7fc)] border border-[var(--glass\/stroke,rgba(255,255,255,0.7))] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative rounded-[999px] shrink-0" data-node-id="18:303" data-name="Button">
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[15px] text-[color:var(--brand\/navy,#193376)] whitespace-nowrap" data-node-id="I18:303;11:11">
                Chỉnh sửa
              </p>
            </div>
          </div>
        </div>
        <a className="bg-[var(--neutral\/white,white)] content-stretch cursor-pointer flex gap-[12px] items-center pl-[8px] pr-[12px] py-[8px] relative rounded-[20px] shrink-0 w-full" data-node-id="18:308" data-name="Card/Tour gợi ý">
          <div className="relative rounded-[14px] shrink-0 size-[64px]" data-node-id="18:309" data-name="Ảnh/Đà Lạt">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgNhDaLt} />
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic relative text-left whitespace-nowrap" data-node-id="18:310" data-name="Frame">
            <p className="font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--neutral\/ink,#0e1730)]" data-node-id="18:311">
              Tour săn mây Cầu Đất
            </p>
            <p className="font-['Be_Vietnam_Pro'] font-medium leading-[1.4] relative shrink-0 text-[13px] text-[color:var(--neutral\/ink-2,#5b6585)]" data-node-id="18:312">
              ⭐ 4,8 · từ 590.000đ
            </p>
          </div>
          <div className="bg-[var(--brand\/sun,#ffd23f)] content-stretch flex items-start p-[10px] relative rounded-[999px] shrink-0" data-node-id="18:313" data-name="Btn/arrow">
            <div className="relative shrink-0 size-[20px]" data-node-id="18:314" data-name="Icon/arrow">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconArrow1} />
            </div>
          </div>
        </a>
      </div>
      <div className="absolute content-stretch flex gap-[8px] items-start left-[16px] top-[694px]" data-node-id="18:316" data-name="Gợi ý trả lời">
        <Chip className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch flex items-center px-[16px] py-[10px] relative rounded-[999px] shrink-0" nhan="💸 Rẻ hơn chút" />
        <Chip className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch flex items-center px-[16px] py-[10px] relative rounded-[999px] shrink-0" nhan="☕ Thêm quán cafe" />
        <Chip className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch flex items-center px-[16px] py-[10px] relative rounded-[999px] shrink-0" nhan="🔁 Đổi sang 2N1Đ" />
      </div>
      <div className="absolute bg-[var(--neutral\/white,white)] content-stretch drop-shadow-[0px_12px_16px_rgba(25,51,118,0.12)] flex gap-[10px] h-[60px] items-center left-[16px] p-[8px] rounded-[999px] top-[750px] w-[358px]" data-node-id="18:323" data-name="AI Bar">
        <div className="bg-[var(--brand\/cyan-soft,#ddf4fc)] overflow-clip relative rounded-[999px] shrink-0 size-[44px]" data-node-id="I18:323;11:144" data-name="Lali">
          <MascotLali className="absolute left-0 size-[44px] top-[4px]" />
        </div>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Be_Vietnam_Pro'] font-normal h-[23px] leading-[1.5] min-w-px not-italic overflow-hidden relative text-[15px] text-[color:var(--neutral\/ink-2,#5b6585)] text-ellipsis whitespace-nowrap" data-node-id="I18:323;11:145">
          Nhắn cho Lali…
        </p>
        <div className="bg-[var(--neutral\/bg,#f3f7fc)] content-stretch flex items-start overflow-clip p-[10px] relative rounded-[999px] shrink-0" data-node-id="I18:323;11:146" data-name="Btn/mic">
          <div className="relative shrink-0 size-[24px]" data-node-id="I18:323;11:147" data-name="Icon/mic">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconMic} />
          </div>
        </div>
        <div className="bg-[var(--brand\/navy,#193376)] content-stretch flex items-start overflow-clip p-[10px] relative rounded-[999px] shrink-0" data-node-id="I18:323;11:150" data-name="Btn/camera">
          <div className="relative shrink-0 size-[24px]" data-node-id="I18:323;11:151" data-name="Icon/camera">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCamera} />
          </div>
        </div>
      </div>
    </div>
  );
}