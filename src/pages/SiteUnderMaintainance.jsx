import { Settings } from "lucide-react";

function SiteUnderMaintainance() {
  const redirectToWhatsapp = () => {
    window.open("https://wa.me/94777174586", "_blank");
  };

  const redirectToTelegram = () => {
    window.open("https://t.me/Villalakemountain", "_blank");
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center p-5">
        <div>
          <Settings className="animate-spin duration-1000" size={48} />
          <h1 className="text-2xl md:text-5xl font-semibold">Site Under Maintainance</h1>
          <p className="text-sm mb-2 md:text-lg">
            The Villa Lake Mountain website is currently under maintainance. If
            you need to contact us please don't hesitate to send a message.
          </p>
          <div className="flex space-x-2">
            <button className="btn btn-outline " onClick={redirectToWhatsapp}>
              Whatsapp
            </button>
            <button className="btn btn-outline" onClick={redirectToTelegram}>
              Telegram
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SiteUnderMaintainance;
