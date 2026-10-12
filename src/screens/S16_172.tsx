const imgBiuCmVui = "assets/991757e9dd5c.svg";
const imgEllipse = "assets/e2095f9bf6cb.svg";
const imgEllipse1 = "assets/ff0864c2a1ce.svg";
const imgEllipse2 = "assets/07fe61e19d25.svg";

type MascotLaliProps = {
  className?: string;
  biuCm?: "Vui";
};

function MascotLali({ className, biuCm = "Vui" }: MascotLaliProps) {
  return (
    <div className={className || "relative size-[200px]"} data-node-id="8:36">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBiuCmVui} />
    </div>
  );
}

export default function Screen_16_172() {
  return (
    <div className="relative size-full" data-node-id="16:172" style={{ backgroundImage: "linear-gradient(121.63779279458019deg, rgb(4, 168, 220) 0%, rgb(25, 51, 118) 71.429%)" }} data-name="00 · Loading">
      <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] left-[32px] not-italic text-[15px] text-[color:var(--neutral\/white,white)] top-[16px] whitespace-nowrap" data-node-id="16:173">
        9:41
      </p>
      <div className="absolute left-[-60px] size-[220px] top-[120px]" data-node-id="16:174" data-name="Ellipse">
        <div className="absolute inset-[-36.36%]">
          <img alt="" className="block max-w-none size-full" src={imgEllipse} />
        </div>
      </div>
      <div className="absolute left-[250px] size-[260px] top-[560px]" data-node-id="16:175" data-name="Ellipse">
        <div className="absolute inset-[-30.77%]">
          <img alt="" className="block max-w-none size-full" src={imgEllipse1} />
        </div>
      </div>
      <div className="absolute left-[280px] size-[90px] top-[60px]" data-node-id="16:176" data-name="Ellipse">
        <div className="absolute inset-[-88.89%]">
          <img alt="" className="block max-w-none size-full" src={imgEllipse2} />
        </div>
      </div>
      <MascotLali className="absolute left-[95px] size-[200px] top-[250px]" />
      <p className="[word-break:break-word] absolute font-['Irish_Grover'] font-normal leading-[0] left-[88px] not-italic text-[56px] text-[color:var(--neutral\/white,white)] top-[470px] whitespace-nowrap" data-node-id="16:193">
        <span className="leading-[normal] text-[#ffd23f]">Lali</span>
        <span className="leading-[normal]">dana</span>
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Be_Vietnam_Pro'] font-semibold leading-[1.5] left-[195px] not-italic opacity-85 text-[15px] text-[color:var(--neutral\/white,white)] text-center top-[548px] w-[300px]" data-node-id="16:194">
        Xách balo lên, Lali lo phần còn lại
      </p>
      <div className="absolute bg-[var(--neutral\/white,white)] h-[8px] left-[115px] overflow-clip rounded-[999px] top-[720px] w-[160px]" data-node-id="16:195" data-name="Frame">
        <div className="absolute bg-[var(--brand\/sun,#ffd23f)] h-[8px] left-0 rounded-[999px] top-0 w-[96px]" data-node-id="16:196" data-name="Rectangle" />
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Be_Vietnam_Pro'] font-medium leading-[1.4] left-[195px] not-italic opacity-80 text-[13px] text-[color:var(--neutral\/white,white)] text-center top-[740px] w-[200px]" data-node-id="16:197">
        Đang gói hành lý…
      </p>
    </div>
  );
}