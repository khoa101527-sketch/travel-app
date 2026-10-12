import { useState } from "react";

const imgIcon = "assets/150ff9bb5561.svg";
const imgNhDaLt = "assets/98fd85eef394.jpg";
const imgIconArrow = "assets/36c54e81ec68.svg";
const imgIconTicket = "assets/acc00c3fc133.svg";
const imgEllipse = "assets/673506885fa6.svg";
const imgEllipse1 = "assets/2de57bd0bc5d.svg";

type ButtonProps = {
  className?: string;
  nhan?: string;
  type?: "Primary";
};

function Button({ className, nhan = "Đặt ngay", type = "Primary" }: ButtonProps) {
  return (
    <div className={className || "bg-[var(--brand\\/navy,#193376)] content-stretch flex gap-[8px] items-center px-[24px] py-[16px] relative rounded-[999px]"} data-node-id="11:2">
      <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[15px] text-[color:var(--neutral\/white,white)] whitespace-nowrap" data-node-id="11:3">
        {nhan}
      </p>
      <div className="relative shrink-0 size-[24px]" data-node-id="11:4" data-name="Icon">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
      </div>
    </div>
  );
}

const vnd = (n: number) => n.toLocaleString("vi-VN") + "đ";

export default function Screen_19_393() {
  const [adults, setAdults] = useState(2);
  const [kids, setKids] = useState(0);
  // Children are 30% off; LALIGENZ voucher takes 10% off the subtotal.
  const subtotal = adults * 1590000 + kids * 1113000;
  const step = (set: (f: (n: number) => number) => void, d: number, min: number) => (e: React.MouseEvent) => {
    e.stopPropagation();
    set((n) => Math.max(min, Math.min(12, n + d)));
  };
  return (
    <div className="relative size-full" data-node-id="19:393" style={{ backgroundImage: "linear-gradient(180deg, rgb(221, 244, 252) 0%, rgba(243, 247, 252, 0) 45%), linear-gradient(90deg, rgb(243, 247, 252) 0%, rgb(243, 247, 252) 100%)" }} data-name="06 · Đặt tour">
      <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] left-[32px] not-italic text-[15px] text-[color:var(--neutral\/ink,#0e1730)] top-[16px] whitespace-nowrap" data-node-id="19:394">
        9:41
      </p>
      <div className="absolute content-stretch flex h-[48px] items-center justify-between left-[16px] top-[50px] w-[358px]" data-node-id="19:395" data-name="Top Bar">
        <button className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch cursor-pointer flex items-start p-[12px] relative rounded-[999px] shrink-0" data-node-id="19:396" data-name="Btn/arrow">
          <div className="flex items-center justify-center relative shrink-0" data-node-id="19:397">
            <div className="flex-none rotate-180">
              <div className="relative size-[24px]" data-name="Icon/arrow">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconArrow} />
              </div>
            </div>
          </div>
        </button>
        <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-bold leading-[1.3] not-italic relative shrink-0 text-[18px] text-[color:var(--neutral\/ink,#0e1730)] tracking-[-0.09px] whitespace-nowrap" data-node-id="19:399">
          Đặt tour
        </p>
        <div className="relative shrink-0 size-[48px]" data-node-id="19:400" data-name="Frame" />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[16px] top-[114px] w-[358px]" data-node-id="19:401" data-name="Content">
        <div className="bg-[var(--neutral\/white,white)] content-stretch flex gap-[12px] items-center p-[10px] relative rounded-[20px] shrink-0 w-full" data-node-id="19:402" data-name="Summary">
          <div className="relative rounded-[14px] shrink-0 size-[60px]" data-node-id="19:403" data-name="Ảnh/Đà Lạt">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgNhDaLt} />
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="19:404" data-name="Frame">
            <p className="font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--neutral\/ink,#0e1730)]" data-node-id="19:405">
              Tour săn mây Cầu Đất 2N1Đ
            </p>
            <p className="font-['Be_Vietnam_Pro'] font-medium leading-[1.4] relative shrink-0 text-[13px] text-[color:var(--neutral\/ink-2,#5b6585)]" data-node-id="19:406">
              Đà Lạt · ⭐ 4,8
            </p>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0" data-node-id="19:407" data-name="Section/Chọn ngày khởi hành">
          <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-bold leading-[1.3] not-italic relative shrink-0 text-[18px] text-[color:var(--neutral\/ink,#0e1730)] tracking-[-0.09px] whitespace-nowrap" data-node-id="19:408">
            Chọn ngày khởi hành
          </p>
        </div>
        <div className="[word-break:break-word] content-stretch flex gap-[8px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="19:409" data-name="Dates">
          <div className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch flex flex-col gap-[2px] items-center py-[10px] relative rounded-[18px] shrink-0 w-[64px]" data-node-id="19:410" data-name="Frame">
            <p className="font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] relative shrink-0 text-[12px] text-[color:var(--neutral\/ink-2,#5b6585)] tracking-[0.06px]" data-node-id="19:411">
              T6
            </p>
            <p className="font-['Be_Vietnam_Pro'] font-bold leading-[1.25] relative shrink-0 text-[22px] text-[color:var(--neutral\/ink-3,#9aa3bc)] tracking-[-0.22px]" data-node-id="19:412">
              14
            </p>
            <p className="font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] relative shrink-0 text-[12px] text-[color:var(--status\/danger,#ef4b4b)] tracking-[0.06px]" data-node-id="19:413">
              Hết chỗ
            </p>
          </div>
          <div className="bg-[var(--brand\/navy,#193376)] content-stretch flex flex-col gap-[2px] items-center py-[10px] relative rounded-[18px] shrink-0 w-[64px]" data-node-id="19:414" data-name="Frame">
            <p className="font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] relative shrink-0 text-[12px] text-[color:var(--neutral\/white,white)] tracking-[0.06px]" data-node-id="19:415">
              T7
            </p>
            <p className="font-['Be_Vietnam_Pro'] font-bold leading-[1.25] relative shrink-0 text-[22px] text-[color:var(--neutral\/white,white)] tracking-[-0.22px]" data-node-id="19:416">
              15
            </p>
            <p className="font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] relative shrink-0 text-[12px] text-[color:var(--brand\/sun,#ffd23f)] tracking-[0.06px]" data-node-id="19:417">
              Còn 4
            </p>
          </div>
          <div className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch flex flex-col gap-[2px] items-center py-[10px] relative rounded-[18px] shrink-0 w-[64px]" data-node-id="19:418" data-name="Frame">
            <p className="font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] relative shrink-0 text-[12px] text-[color:var(--neutral\/ink-2,#5b6585)] tracking-[0.06px]" data-node-id="19:419">
              CN
            </p>
            <p className="font-['Be_Vietnam_Pro'] font-bold leading-[1.25] relative shrink-0 text-[22px] text-[color:var(--neutral\/ink,#0e1730)] tracking-[-0.22px]" data-node-id="19:420">
              16
            </p>
            <p className="font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] relative shrink-0 text-[12px] text-[color:var(--brand\/cyan,#04a8dc)] tracking-[0.06px]" data-node-id="19:421">
              Còn 9
            </p>
          </div>
          <div className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch flex flex-col gap-[2px] items-center py-[10px] relative rounded-[18px] shrink-0 w-[64px]" data-node-id="19:422" data-name="Frame">
            <p className="font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] relative shrink-0 text-[12px] text-[color:var(--neutral\/ink-2,#5b6585)] tracking-[0.06px]" data-node-id="19:423">
              T2
            </p>
            <p className="font-['Be_Vietnam_Pro'] font-bold leading-[1.25] relative shrink-0 text-[22px] text-[color:var(--neutral\/ink,#0e1730)] tracking-[-0.22px]" data-node-id="19:424">
              17
            </p>
            <p className="font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] relative shrink-0 text-[12px] text-[color:var(--brand\/cyan,#04a8dc)] tracking-[0.06px]" data-node-id="19:425">
              Còn 12
            </p>
          </div>
          <div className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch flex flex-col gap-[2px] items-center py-[10px] relative rounded-[18px] shrink-0 w-[64px]" data-node-id="19:426" data-name="Frame">
            <p className="font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] relative shrink-0 text-[12px] text-[color:var(--neutral\/ink-2,#5b6585)] tracking-[0.06px]" data-node-id="19:427">
              T3
            </p>
            <p className="font-['Be_Vietnam_Pro'] font-bold leading-[1.25] relative shrink-0 text-[22px] text-[color:var(--neutral\/ink,#0e1730)] tracking-[-0.22px]" data-node-id="19:428">
              18
            </p>
            <p className="font-['Be_Vietnam_Pro'] font-semibold leading-[1.3] relative shrink-0 text-[12px] text-[color:var(--brand\/cyan,#04a8dc)] tracking-[0.06px]" data-node-id="19:429">
              Còn 12
            </p>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0" data-node-id="19:430" data-name="Section/Số người">
          <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-bold leading-[1.3] not-italic relative shrink-0 text-[18px] text-[color:var(--neutral\/ink,#0e1730)] tracking-[-0.09px] whitespace-nowrap" data-node-id="19:431">
            Số người
          </p>
        </div>
        <div className="bg-[var(--neutral\/white,white)] content-stretch flex flex-col items-start relative rounded-[20px] shrink-0 w-full" data-node-id="19:432" data-name="People">
          <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="19:433" data-name="Frame">
            <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="19:434" data-name="Frame">
              <p className="font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--neutral\/ink,#0e1730)]" data-node-id="19:435">
                Người lớn
              </p>
              <p className="font-['Be_Vietnam_Pro'] font-medium leading-[1.4] relative shrink-0 text-[13px] text-[color:var(--neutral\/ink-2,#5b6585)]" data-node-id="19:436">
                Từ 12 tuổi
              </p>
            </div>
            <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-node-id="19:437" data-name="Frame">
              <div role="button" onClick={step(setAdults, -1, 1)} className="bg-[var(--neutral\/bg,#f3f7fc)] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px] cursor-pointer select-none" data-node-id="19:438" data-name="Frame">
                <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-bold leading-[1.3] not-italic relative shrink-0 text-[18px] text-[color:var(--neutral\/ink-2,#5b6585)] tracking-[-0.09px] whitespace-nowrap" data-node-id="19:439">
                  −
                </p>
              </div>
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-bold leading-[1.3] not-italic relative shrink-0 text-[18px] text-[color:var(--neutral\/ink,#0e1730)] tracking-[-0.09px] whitespace-nowrap" data-node-id="19:440">{adults}</p>
              <div role="button" onClick={step(setAdults, 1, 1)} className="bg-[var(--brand\/navy,#193376)] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px] cursor-pointer select-none" data-node-id="19:441" data-name="Frame">
                <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-bold leading-[1.3] not-italic relative shrink-0 text-[18px] text-[color:var(--neutral\/white,white)] tracking-[-0.09px] whitespace-nowrap" data-node-id="19:442">
                  +
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="19:443" data-name="Frame">
            <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="19:444" data-name="Frame">
              <p className="font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--neutral\/ink,#0e1730)]" data-node-id="19:445">
                Trẻ em
              </p>
              <p className="font-['Be_Vietnam_Pro'] font-medium leading-[1.4] relative shrink-0 text-[13px] text-[color:var(--neutral\/ink-2,#5b6585)]" data-node-id="19:446">
                2–11 tuổi · giảm 30%
              </p>
            </div>
            <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-node-id="19:447" data-name="Frame">
              <div role="button" onClick={step(setKids, -1, 0)} className="bg-[var(--neutral\/bg,#f3f7fc)] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px] cursor-pointer select-none" data-node-id="19:448" data-name="Frame">
                <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-bold leading-[1.3] not-italic relative shrink-0 text-[18px] text-[color:var(--neutral\/ink-2,#5b6585)] tracking-[-0.09px] whitespace-nowrap" data-node-id="19:449">
                  −
                </p>
              </div>
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-bold leading-[1.3] not-italic relative shrink-0 text-[18px] text-[color:var(--neutral\/ink,#0e1730)] tracking-[-0.09px] whitespace-nowrap" data-node-id="19:450">{kids}</p>
              <div role="button" onClick={step(setKids, 1, 0)} className="bg-[var(--brand\/navy,#193376)] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px] cursor-pointer select-none" data-node-id="19:451" data-name="Frame">
                <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-bold leading-[1.3] not-italic relative shrink-0 text-[18px] text-[color:var(--neutral\/white,white)] tracking-[-0.09px] whitespace-nowrap" data-node-id="19:452">
                  +
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[var(--brand\/sun-soft,#fff4cc)] border border-[var(--brand\/sun,#ffd23f)] border-dashed content-stretch flex gap-[10px] items-center px-[16px] py-[14px] relative rounded-[20px] shrink-0 w-full" data-node-id="19:453" data-name="Voucher">
          <div className="relative shrink-0 size-[24px]" data-node-id="19:454" data-name="Icon/ticket">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTicket} />
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative whitespace-nowrap" data-node-id="19:457" data-name="Frame">
            <p className="font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--brand\/navy,#193376)]" data-node-id="19:458">
              LALIGENZ · Giảm 10%
            </p>
            <p className="font-['Be_Vietnam_Pro'] font-medium leading-[1.4] relative shrink-0 text-[13px] text-[color:var(--status\/success,#1fb866)]" data-node-id="19:459">{"Đã áp dụng, tiết kiệm " + vnd(Math.round(subtotal * 0.1))}</p>
          </div>
          <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[15px] text-[color:var(--brand\/cyan,#04a8dc)] whitespace-nowrap" data-node-id="19:460">
            Đổi
          </p>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0" data-node-id="19:461" data-name="Section/Thanh toán">
          <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-bold leading-[1.3] not-italic relative shrink-0 text-[18px] text-[color:var(--neutral\/ink,#0e1730)] tracking-[-0.09px] whitespace-nowrap" data-node-id="19:462">
            Thanh toán
          </p>
        </div>
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="19:463" data-name="Payment">
          <div className="bg-[var(--neutral\/white,white)] border-2 border-[var(--brand\/navy,#193376)] border-solid content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative rounded-[16px] shrink-0" data-node-id="19:464" data-name="Frame">
            <div className="relative shrink-0 size-[16px]" data-node-id="19:465" data-name="Ellipse">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
            </div>
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[15px] text-[color:var(--neutral\/ink,#0e1730)] whitespace-nowrap" data-node-id="19:466">
              MoMo
            </p>
          </div>
          <div className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative rounded-[16px] shrink-0" data-node-id="19:467" data-name="Frame">
            <div className="relative shrink-0 size-[16px]" data-node-id="19:468" data-name="Ellipse">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
            </div>
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[15px] text-[color:var(--neutral\/ink,#0e1730)] whitespace-nowrap" data-node-id="19:469">
              ZaloPay
            </p>
          </div>
          <div className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/line,#e4e9f2)] border-solid content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative rounded-[16px] shrink-0" data-node-id="19:470" data-name="Frame">
            <div className="relative shrink-0 size-[16px]" data-node-id="19:471" data-name="Ellipse">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
            </div>
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[15px] text-[color:var(--neutral\/ink,#0e1730)] whitespace-nowrap" data-node-id="19:472">
              Thẻ ATM
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--neutral\/white,white)] content-stretch drop-shadow-[0px_12px_16px_rgba(25,51,118,0.12)] flex h-[96px] items-center justify-between left-0 pb-[20px] px-[20px] rounded-tl-[28px] rounded-tr-[28px] top-[748px] w-[390px]" data-node-id="19:473" data-name="Bottom Bar">
        <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="19:474" data-name="Frame">
          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid font-['Be_Vietnam_Pro'] font-medium leading-[1.4] line-through relative shrink-0 text-[13px] text-[color:var(--neutral\/ink-3,#9aa3bc)]" data-node-id="19:475">{vnd(subtotal)}</p>
          <p className="font-['Be_Vietnam_Pro'] font-bold leading-[1.25] relative shrink-0 text-[22px] text-[color:var(--brand\/navy,#193376)] tracking-[-0.22px]" data-node-id="19:476">{vnd(Math.round(subtotal * 0.9))}</p>
        </div>
        <Button className="bg-[var(--brand\/navy,#193376)] content-stretch cursor-pointer flex gap-[8px] items-center px-[24px] py-[16px] relative rounded-[999px] shrink-0" nhan="Thanh toán" />
      </div>
    </div>
  );
}