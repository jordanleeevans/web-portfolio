import LgButtons from "@/components/intro/lg-buttons";
import SmButtons from "@/components/intro/sm-buttons";

export default function ActionButtons() {
  return (
    <>
      <div className="hidden sm:block">
        <LgButtons />
      </div>
      <div className="sm:hidden">
        <SmButtons />
      </div>
    </>
  );
}
