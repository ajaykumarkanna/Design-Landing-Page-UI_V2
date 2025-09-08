import imgHeroImage from "figma:asset/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";
import { imgIcon, imgIcon1, imgIcon2, imgIcon3, imgIcon4, imgIcon5, imgFigma, imgPlusSquare, imgSidebar, imgSmile, imgDrag } from "./svg-9j940";

interface ClockProps {
  size?: "20" | "24" | "32" | "40" | "48" | "16";
}

function Clock({ size = "48" }: ClockProps) {
  if (size === "16") {
    return (
      <div className="relative size-full" data-name="Size=16">
        <div className="absolute inset-[8.333%]" data-name="Icon">
          <div className="absolute inset-[-6%]" style={{ "--stroke-0": "rgba(30, 30, 30, 1)" } as React.CSSProperties}>
            <img className="block max-w-none size-full" src={imgIcon} />
          </div>
        </div>
      </div>
    );
  }
  if (size === "20") {
    return (
      <div className="relative size-full" data-name="Size=20">
        <div className="absolute inset-[8.333%]" data-name="Icon">
          <div className="absolute inset-[-6%]" style={{ "--stroke-0": "rgba(30, 30, 30, 1)" } as React.CSSProperties}>
            <img className="block max-w-none size-full" src={imgIcon1} />
          </div>
        </div>
      </div>
    );
  }
  if (size === "24") {
    return (
      <div className="relative size-full" data-name="Size=24">
        <div className="absolute inset-[8.333%]" data-name="Icon">
          <div className="absolute inset-[-6.25%]" style={{ "--stroke-0": "rgba(30, 30, 30, 1)" } as React.CSSProperties}>
            <img className="block max-w-none size-full" src={imgIcon2} />
          </div>
        </div>
      </div>
    );
  }
  if (size === "32") {
    return (
      <div className="relative size-full" data-name="Size=32">
        <div className="absolute inset-[8.333%]" data-name="Icon">
          <div className="absolute inset-[-5.625%]" style={{ "--stroke-0": "rgba(30, 30, 30, 1)" } as React.CSSProperties}>
            <img className="block max-w-none size-full" src={imgIcon3} />
          </div>
        </div>
      </div>
    );
  }
  if (size === "40") {
    return (
      <div className="relative size-full" data-name="Size=40">
        <div className="absolute inset-[8.333%]" data-name="Icon">
          <div className="absolute inset-[-5.25%]" style={{ "--stroke-0": "rgba(30, 30, 30, 1)" } as React.CSSProperties}>
            <img className="block max-w-none size-full" src={imgIcon4} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative size-full" data-name="Size=48">
      <div className="absolute inset-[8.333%]" data-name="Icon">
        <div className="absolute inset-[-5%]" style={{ "--stroke-0": "rgba(30, 30, 30, 1)" } as React.CSSProperties}>
          <img className="block max-w-none size-full" src={imgIcon5} />
        </div>
      </div>
    </div>
  );
}

interface TextHeadingProps {
  text?: string;
}

function TextHeading({ text = "Text Heading" }: TextHeadingProps) {
  return (
    <div className="content-stretch flex items-start justify-start relative size-full" data-name="Text Heading">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[24px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.2] whitespace-pre">{text}</p>
      </div>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="bg-[position:0%_0%,_50%_50%] bg-size-[auto,cover] relative size-full" data-name="Hero Image" style={{ backgroundImage: `url('${imgHeroImage}')` }}>
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-12 items-center justify-start px-6 py-40 relative size-full">
          <div className="content-stretch flex flex-col gap-2 items-center justify-start leading-[0] not-italic relative shrink-0 text-[#0c0c0d] text-center" data-name="Text Content Title">
            <div className="font-['Inter:Bold',_sans-serif] font-bold relative shrink-0 text-[72px] tracking-[-2.16px] w-full">
              <p className="leading-[1.2]">Community</p>
            </div>
            <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[32px] w-full">
              <p className="leading-[1.2]">Join our community for live updates and discounts</p>
            </div>
          </div>
          <div className="content-start flex flex-wrap gap-16 items-start justify-center relative shrink-0 w-[1072px]" data-name="Cards">
            <div className="bg-white box-border content-stretch flex flex-col gap-6 items-center justify-start min-w-60 p-[24px] relative rounded-[8px] shrink-0" data-name="Stats Card">
              <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="overflow-clip relative shrink-0 size-10" data-name="Size=48">
                <Clock />
              </div>
              <div className="content-stretch flex flex-col gap-1 items-center justify-start relative shrink-0 w-full" data-name="Review Body">
                <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Text Heading">
                  <TextHeading text="100" />
                </div>
                <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Text">
                  <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center text-nowrap">
                    <p className="leading-[1.4] whitespace-pre">Instagram</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white box-border content-stretch flex flex-col gap-6 items-center justify-start min-w-60 p-[24px] relative rounded-[8px] shrink-0" data-name="Stats Card">
              <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="overflow-clip relative shrink-0 size-10" data-name="Size=48">
                <Clock />
              </div>
              <div className="content-stretch flex flex-col gap-1 items-center justify-start relative shrink-0 w-full" data-name="Review Body">
                <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Text Heading">
                  <TextHeading text="100" />
                </div>
                <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Text">
                  <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center text-nowrap">
                    <p className="leading-[1.4] whitespace-pre">Linkedin</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white box-border content-stretch flex flex-col gap-6 items-center justify-start min-w-60 p-[24px] relative rounded-[8px] shrink-0" data-name="Stats Card">
              <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="overflow-clip relative shrink-0 size-10" data-name="Size=48">
                <Clock />
              </div>
              <div className="content-stretch flex flex-col gap-1 items-center justify-start relative shrink-0 w-full" data-name="Review Body">
                <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Text Heading">
                  <TextHeading text="100" />
                </div>
                <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Text">
                  <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center text-nowrap">
                    <p className="leading-[1.4] whitespace-pre">Discord</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Figma() {
  return (
    <div className="h-[35px] relative shrink-0 w-10" data-name="Figma">
      <div className="absolute bottom-[-5%] left-0 right-0 top-[-5%]">
        <img className="block max-w-none size-full" src={imgFigma} />
      </div>
    </div>
  );
}

function Block() {
  return (
    <div className="content-stretch flex gap-6 items-center justify-start relative shrink-0" data-name="Block">
      <Figma />
    </div>
  );
}

function NavigationPill() {
  return (
    <div className="bg-neutral-100 box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Navigation Pill">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-nowrap">
        <p className="leading-none whitespace-pre">Products</p>
      </div>
    </div>
  );
}

function NavigationPill1() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Navigation Pill">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-nowrap">
        <p className="leading-none whitespace-pre">Community</p>
      </div>
    </div>
  );
}

function NavigationPill2() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Navigation Pill">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-nowrap">
        <p className="leading-none whitespace-pre">Contact</p>
      </div>
    </div>
  );
}

function NavigationPillList() {
  return (
    <div className="basis-0 content-start flex flex-wrap gap-2 grow items-start justify-end min-h-px min-w-px relative shrink-0" data-name="Navigation Pill List">
      <NavigationPill />
      <NavigationPill1 />
      <NavigationPill2 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white h-[99px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-center flex flex-wrap gap-6 h-[99px] items-center justify-start p-[32px] relative w-full">
          <Block />
          <NavigationPillList />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TextContentTitle() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-center justify-start leading-[0] not-italic relative shrink-0 text-[#0c0c0d] text-center" data-name="Text Content Title">
      <div className="font-['Inter:Bold',_sans-serif] font-bold relative shrink-0 text-[72px] tracking-[-2.16px] w-full">
        <p className="leading-[1.2]">The UX Suite</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[32px] w-full">
        <p className="leading-[1.2]">A Notion OS built for designers, by a designer</p>
      </div>
    </div>
  );
}

function PlusSquare() {
  return (
    <div className="relative shrink-0 size-4" data-name="Plus square">
      <img className="block max-w-none size-full" src={imgPlusSquare} />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#2c2c2c] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="box-border content-stretch flex gap-2 items-center justify-center overflow-clip p-[12px] relative">
        <PlusSquare />
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-neutral-100 text-nowrap">
          <p className="leading-none whitespace-pre">Join the Waitlist</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#2c2c2c] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-4 items-center justify-center relative shrink-0" data-name="Button Group">
      <Button1 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="relative shrink-0 size-8" data-name="Sidebar">
      <img className="block max-w-none size-full" src={imgSidebar} />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Text">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">
        <p className="leading-[1.2]">AI-powered meeting notes that write themselves</p>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-40 relative shrink-0" data-name="Body">
      <Text />
    </div>
  );
}

function Card() {
  return (
    <div className="content-start flex flex-wrap gap-6 items-start justify-start min-w-60 relative shrink-0 w-[301.333px]" data-name="Card">
      <Sidebar />
      <Body />
    </div>
  );
}

function Smile() {
  return (
    <div className="relative shrink-0 size-8" data-name="Smile">
      <img className="block max-w-none size-full" src={imgSmile} />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Text">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">
        <p className="leading-[1.2]">{`Frictionless client & project tracking`}</p>
      </div>
    </div>
  );
}

function Body1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-40 relative shrink-0" data-name="Body">
      <Text1 />
    </div>
  );
}

function Card1() {
  return (
    <div className="basis-0 content-start flex flex-wrap gap-6 grow items-start justify-start min-h-px min-w-60 relative shrink-0" data-name="Card">
      <Smile />
      <Body1 />
    </div>
  );
}

function Compass() {
  return (
    <div className="relative shrink-0 size-8" data-name="Compass">
      <img className="block max-w-none size-full" src={imgSmile} />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Text">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">
        <p className="leading-[1.2]">Designed for your UX workflow</p>
      </div>
    </div>
  );
}

function Body2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-40 relative shrink-0" data-name="Body">
      <Text2 />
    </div>
  );
}

function Card2() {
  return (
    <div className="basis-0 content-start flex flex-wrap gap-6 grow items-start justify-start min-h-px min-w-60 relative shrink-0" data-name="Card">
      <Compass />
      <Body2 />
    </div>
  );
}

function Cards() {
  return (
    <div className="content-start flex flex-wrap gap-16 items-start justify-center relative shrink-0 w-[1072px]" data-name="Cards">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function HeroImage1() {
  return (
    <div className="bg-[#ffffffcc] bg-[position:0%_0%,_50%_50%] bg-size-[auto,cover] relative shrink-0 w-full" data-name="Hero Image" style={{ backgroundImage: `url('${imgHeroImage}')` }}>
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-12 items-center justify-start px-6 py-40 relative w-full">
          <TextContentTitle />
          <ButtonGroup />
          <Cards />
          <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0c0c0d] text-[0px] text-center tracking-[-0.48px] w-[690px]">
            <p className="font-['Inter:Italic',_sans-serif] font-normal italic leading-[1.2] text-[24px]">Stop juggling tabs and templates. Finally, a single, AI-powered workspace that manages clients, projects, and your time.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextContentTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-center justify-start leading-[0] not-italic relative shrink-0 text-[#0c0c0d] text-center" data-name="Text Content Title">
      <div className="font-['Inter:Bold',_sans-serif] font-bold relative shrink-0 text-[72px] tracking-[-2.16px] w-full">
        <p className="leading-[1.2]">Contact US</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[32px] w-full">
        <p className="leading-[1.2]">From queries to suggestions, Talk to us about anything</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white min-w-60 relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-start min-w-inherit px-4 py-3 relative w-full">
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#b3b3b3] text-[16px]">
            <p className="leading-none">Value</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
    </div>
  );
}

function InputField() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Input Field">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[16px]" style={{ width: "min-content" }}>
        <p className="leading-[1.4]">Name</p>
      </div>
      <Input />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white min-w-60 relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-start min-w-inherit px-4 py-3 relative w-full">
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#b3b3b3] text-[16px]">
            <p className="leading-none">Value</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
    </div>
  );
}

function InputField1() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Input Field">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[16px]" style={{ width: "min-content" }}>
        <p className="leading-[1.4]">Surname</p>
      </div>
      <Input1 />
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white min-w-60 relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-start min-w-inherit px-4 py-3 relative w-full">
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#b3b3b3] text-[16px]">
            <p className="leading-none">Value</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
    </div>
  );
}

function InputField2() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Input Field">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[16px]" style={{ width: "min-content" }}>
        <p className="leading-[1.4]">Email</p>
      </div>
      <Input2 />
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-white min-h-20 min-w-60 relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="min-h-inherit min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-start justify-start min-h-inherit min-w-inherit px-4 py-3 relative w-full">
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#b3b3b3] text-[16px]">
            <p className="leading-[1.4]">Value</p>
          </div>
          <div className="absolute bottom-[6.02px] right-[5.02px] size-[6.627px]" data-name="Drag">
            <div className="absolute inset-[-5.33%]" style={{ "--stroke-0": "rgba(179, 179, 179, 1)" } as React.CSSProperties}>
              <img className="block max-w-none size-full" src={imgDrag} />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
    </div>
  );
}

function TextareaField() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Textarea Field">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] w-full">
        <p className="leading-[1.4]">Message</p>
      </div>
      <Textarea />
    </div>
  );
}

function Button3() {
  return (
    <div className="basis-0 bg-[#2c2c2c] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-center p-[12px] relative w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-neutral-100 text-nowrap">
            <p className="leading-none whitespace-pre">Send</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#2c2c2c] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ButtonGroup1() {
  return (
    <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0 w-full" data-name="Button Group">
      <Button3 />
    </div>
  );
}

function FormContact() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-6 items-start justify-start min-w-80 p-[24px] relative rounded-[8px] shrink-0" data-name="Form Contact">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <InputField />
      <InputField1 />
      <InputField2 />
      <TextareaField />
      <ButtonGroup1 />
    </div>
  );
}

function HeroImage2() {
  return (
    <div className="bg-[#ffffffcc] bg-[position:0%_0%,_50%_50%] bg-size-[auto,cover] relative shrink-0 w-full" data-name="Hero Image" style={{ backgroundImage: `url('${imgHeroImage}')` }}>
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-12 items-center justify-start px-6 py-40 relative w-full">
          <TextContentTitle1 />
          <FormContact />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Content">
      <HeroImage1 />
      <div className="bg-[#ffffffcc] bg-[position:0%_0%,_50%_50%] bg-size-[auto,cover] relative shrink-0 w-full" data-name="Hero Image" style={{ backgroundImage: `url('${imgHeroImage}')` }}>
        <HeroImage />
      </div>
      <HeroImage2 />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-start relative size-full" data-name="Landing page">
      <Header />
      <Content />
    </div>
  );
}