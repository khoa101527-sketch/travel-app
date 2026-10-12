const imgIcon = "assets/8b16ed28b88a.svg";
const imgAvatar = "assets/a9abefb23c85.svg";
const imgAvatar1 = "assets/1519b4315d55.svg";
const imgAvatar2 = "assets/9f292ea98546.svg";
const imgNhDaLt = "assets/90a838105583.jpg";
const imgNhMay = "assets/3cd654a32cce.jpg";
const imgNhDiChe = "assets/b08f301505de.jpg";
const imgNhCafe = "assets/328cb3d0b434.jpg";
const imgIconArrow = "assets/36c54e81ec68.svg";
const imgIconHeart = "assets/84ffa2697378.svg";
const imgIconArrow1 = "assets/36c54e81ec68.svg";
const imgIconStar = "assets/ac5ca5e91e99.svg";
const imgIconCalendar = "assets/ddc3e0e61996.svg";
const imgIconUsers = "assets/04a844bd2ee5.svg";
const imgIconPin = "assets/ac3b8aefaf26.svg";
const imgEllipse = "assets/7dab3a884d2a.svg";

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

type AvatarStackProps = {
  className?: string;
  sNgi?: string;
};

function AvatarStack({ className, sNgi = "+2,3k" }: AvatarStackProps) {
  return (
    <div className={className || "content-stretch flex isolate items-center relative"} data-node-id="11:154" data-name="Avatar Stack">
      <div className="mr-[-10px] relative shrink-0 size-[28px] z-[4]" data-node-id="11:155" data-name="Avatar">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvatar} />
      </div>
      <div className="mr-[-10px] relative shrink-0 size-[28px] z-[3]" data-node-id="11:156" data-name="Avatar">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvatar1} />
      </div>
      <div className="mr-[-10px] relative shrink-0 size-[28px] z-[2]" data-node-id="11:157" data-name="Avatar">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvatar2} />
      </div>
      <div className="bg-[var(--brand\/sun,#ffd23f)] border-2 border-[var(--neutral\/white,white)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[6px] relative rounded-[999px] shrink-0 z-[1]" data-node-id="11:158" data-name="Count">
        <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--brand\/navy,#193376)] tracking-[0.06px] whitespace-nowrap" data-node-id="11:159">
          {sNgi}
        </p>
      </div>
    </div>
  );
}

export default function Screen_19_318() {
  return (
    <div className="bg-[var(--neutral\/white,white)] relative size-full" data-node-id="19:318" data-name="05 · Chi tiết tour">
      <div className="absolute h-[400px] left-0 overflow-clip top-0 w-[390px]" data-node-id="19:320" data-name="Ảnh/Đà Lạt">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNhDaLt} />
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.3)] h-[120px] left-0 to-[rgba(0,0,0,0)] top-0 w-[390px]" data-node-id="19:321" data-name="Rectangle" />
      </div>
      <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] left-[32px] not-italic text-[15px] text-[color:var(--neutral\/white,white)] top-[16px] whitespace-nowrap" data-node-id="19:319">
        9:41
      </p>
      <div className="absolute content-stretch flex h-[48px] items-center justify-between left-[16px] top-[50px] w-[358px]" data-node-id="19:322" data-name="Top Bar">
        <button className="backdrop-blur-[12px] bg-[var(--glass\/light,rgba(255,255,255,0.62))] border border-[var(--glass\/stroke,rgba(255,255,255,0.7))] border-solid content-stretch cursor-pointer flex items-start p-[12px] relative rounded-[999px] shrink-0" data-node-id="19:323" data-name="Btn/arrow">
          <div className="flex items-center justify-center relative shrink-0" data-node-id="19:324">
            <div className="flex-none rotate-180">
              <div className="relative size-[24px]" data-name="Icon/arrow">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconArrow} />
              </div>
            </div>
          </div>
        </button>
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="19:326" data-name="Frame">
          <div className="backdrop-blur-[12px] bg-[var(--glass\/light,rgba(255,255,255,0.62))] border border-[var(--glass\/stroke,rgba(255,255,255,0.7))] border-solid content-stretch flex items-start p-[12px] relative rounded-[999px] shrink-0" data-node-id="19:327" data-name="Btn/heart">
            <div className="relative shrink-0 size-[24px]" data-node-id="19:328" data-name="Icon/heart">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHeart} />
            </div>
          </div>
          <div className="backdrop-blur-[12px] bg-[var(--glass\/light,rgba(255,255,255,0.62))] border border-[var(--glass\/stroke,rgba(255,255,255,0.7))] border-solid content-stretch flex items-start p-[12px] relative rounded-[999px] shrink-0" data-node-id="19:330" data-name="Btn/arrow">
            <div className="flex items-center justify-center relative shrink-0 size-[33.941px]" data-node-id="19:331">
              <div className="-rotate-45 flex-none">
                <div className="relative size-[24px]" data-name="Icon/arrow">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconArrow1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[8px] items-start left-[16px] top-[300px]" data-node-id="19:333" data-name="Thumbs">
        <div className="border-2 border-[var(--neutral\/white,white)] border-solid relative rounded-[14px] shrink-0 size-[52px]" data-node-id="19:334" data-name="Ảnh/Mây">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgNhMay} />
        </div>
        <div className="border-2 border-[var(--neutral\/white,white)] border-solid relative rounded-[14px] shrink-0 size-[52px]" data-node-id="19:335" data-name="Ảnh/Đồi chè">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgNhDiChe} />
        </div>
        <div className="border-2 border-[var(--neutral\/white,white)] border-solid relative rounded-[14px] shrink-0 size-[52px]" data-node-id="19:336" data-name="Ảnh/Cafe">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgNhCafe} />
        </div>
        <div className="backdrop-blur-[12px] bg-[var(--glass\/dark,rgba(14,23,48,0.38))] content-stretch flex items-center justify-center relative rounded-[14px] shrink-0 size-[52px]" data-node-id="19:337" data-name="More">
          <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[15px] text-[color:var(--neutral\/white,white)] whitespace-nowrap" data-node-id="19:338">
            +24
          </p>
        </div>
      </div>
      <div className="absolute bg-[var(--neutral\/white,white)] content-stretch flex flex-col gap-[16px] items-start left-0 pb-[120px] pt-[24px] px-[20px] rounded-tl-[32px] rounded-tr-[32px] top-[372px] w-[390px]" data-node-id="19:339" data-name="Content">
        <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-node-id="19:340" data-name="Frame">
          <div className="bg-[var(--brand\/sun-soft,#fff4cc)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="19:341" data-name="Frame">
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--brand\/navy,#193376)] tracking-[0.06px] whitespace-nowrap" data-node-id="19:342">
              🔥 Hot tuần này
            </p>
          </div>
          <div className="bg-[var(--brand\/cyan-soft,#ddf4fc)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="19:343" data-name="Frame">
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[12px] text-[color:var(--brand\/navy,#193376)] tracking-[0.06px] whitespace-nowrap" data-node-id="19:344">{`⛰️ Núi & đồi`}</p>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-bold leading-[1.25] not-italic relative shrink-0 text-[22px] text-[color:var(--neutral\/ink,#0e1730)] tracking-[-0.22px] w-[350px]" data-node-id="19:345">
          Tour săn mây Cầu Đất 2N1Đ
        </p>
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-node-id="19:346" data-name="Frame">
          <div className="relative shrink-0 size-[16px]" data-node-id="19:347" data-name="Icon/star">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconStar} />
          </div>
          <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[15px] text-[color:var(--neutral\/ink,#0e1730)] whitespace-nowrap" data-node-id="19:349">
            4,8 · 1,2k đánh giá
          </p>
          <AvatarStack className="content-stretch flex isolate items-center relative shrink-0" sNgi="+3,4k" />
          <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-medium leading-[1.4] not-italic relative shrink-0 text-[13px] text-[color:var(--neutral\/ink-2,#5b6585)] whitespace-nowrap" data-node-id="19:356">
            đã đến
          </p>
        </div>
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="19:357" data-name="Frame">
          <div className="bg-[var(--neutral\/bg,#f3f7fc)] content-stretch flex gap-[6px] items-center px-[12px] py-[10px] relative rounded-[16px] shrink-0" data-node-id="19:358" data-name="Frame">
            <div className="relative shrink-0 size-[16px]" data-node-id="19:359" data-name="Icon/calendar">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCalendar} />
            </div>
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-medium leading-[1.4] not-italic relative shrink-0 text-[13px] text-[color:var(--neutral\/ink,#0e1730)] whitespace-nowrap" data-node-id="19:362">
              2N1Đ
            </p>
          </div>
          <div className="bg-[var(--neutral\/bg,#f3f7fc)] content-stretch flex gap-[6px] items-center px-[12px] py-[10px] relative rounded-[16px] shrink-0" data-node-id="19:363" data-name="Frame">
            <div className="relative shrink-0 size-[16px]" data-node-id="19:364" data-name="Icon/users">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconUsers} />
            </div>
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-medium leading-[1.4] not-italic relative shrink-0 text-[13px] text-[color:var(--neutral\/ink,#0e1730)] whitespace-nowrap" data-node-id="19:367">
              Tối đa 12
            </p>
          </div>
          <div className="bg-[var(--neutral\/bg,#f3f7fc)] content-stretch flex gap-[6px] items-center px-[12px] py-[10px] relative rounded-[16px] shrink-0" data-node-id="19:368" data-name="Frame">
            <div className="relative shrink-0 size-[16px]" data-node-id="19:369" data-name="Icon/pin">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPin} />
            </div>
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-medium leading-[1.4] not-italic relative shrink-0 text-[13px] text-[color:var(--neutral\/ink,#0e1730)] whitespace-nowrap" data-node-id="19:372">
              Đón tại TT
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex items-center justify-between not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="19:373" data-name="Section/Review nổi bật">
          <p className="font-['Be_Vietnam_Pro'] font-bold leading-[1.3] relative shrink-0 text-[18px] text-[color:var(--neutral\/ink,#0e1730)] tracking-[-0.09px]" data-node-id="19:374">
            Review nổi bật
          </p>
          <p className="font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--brand\/cyan,#04a8dc)]" data-node-id="19:375">
            Xem tất cả
          </p>
        </div>
        <div className="bg-[var(--neutral\/bg,#f3f7fc)] content-stretch flex flex-col gap-[8px] items-start p-[14px] relative rounded-[20px] shrink-0 w-full" data-node-id="19:376" data-name="Review">
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-node-id="19:377" data-name="Frame">
            <div className="relative shrink-0 size-[32px]" data-node-id="19:378" data-name="Ellipse">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Be_Vietnam_Pro'] font-semibold items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="19:379" data-name="Frame">
              <p className="leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--neutral\/ink,#0e1730)]" data-node-id="19:380">
                Thảo Vy · Thổ địa
              </p>
              <p className="leading-[1.3] relative shrink-0 text-[12px] text-[color:var(--neutral\/ink-3,#9aa3bc)] tracking-[0.06px]" data-node-id="19:381">
                ⭐⭐⭐⭐⭐ · 2 ngày trước
              </p>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-normal leading-[1.5] not-italic relative shrink-0 text-[15px] text-[color:var(--neutral\/ink,#0e1730)] w-[322px]" data-node-id="19:382">
            Săn mây đỉnh nóc kịch trần 😭☁️ Anh HDV nhiệt tình, chụp hình cho cả đoàn luôn!
          </p>
        </div>
      </div>
      <div className="absolute bg-[var(--neutral\/white,white)] border-[var(--neutral\/line,#e4e9f2)] border-solid border-t content-stretch flex h-[96px] items-center justify-between left-0 pb-[20px] px-[20px] top-[748px] w-[390px]" data-node-id="19:383" data-name="Bottom Bar">
        <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="19:384" data-name="Frame">
          <p className="font-['Be_Vietnam_Pro'] font-medium leading-[1.4] relative shrink-0 text-[13px] text-[color:var(--neutral\/ink-2,#5b6585)]" data-node-id="19:385">
            Giá từ
          </p>
          <div className="content-stretch flex gap-[4px] items-end relative shrink-0" data-node-id="19:386" data-name="Frame">
            <p className="font-['Be_Vietnam_Pro'] font-bold leading-[1.25] relative shrink-0 text-[22px] text-[color:var(--brand\/navy,#193376)] tracking-[-0.22px]" data-node-id="19:387">
              1.590.000đ
            </p>
            <p className="font-['Be_Vietnam_Pro'] font-medium leading-[1.4] relative shrink-0 text-[13px] text-[color:var(--neutral\/ink-2,#5b6585)]" data-node-id="19:388">
              /người
            </p>
          </div>
        </div>
        <Button className="bg-[var(--brand\/sun,#ffd23f)] content-stretch cursor-pointer flex gap-[8px] items-center px-[24px] py-[16px] relative rounded-[999px] shrink-0" nhan="Đặt tour" />
      </div>
    </div>
  );
}