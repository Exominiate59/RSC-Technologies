import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

const CtaSection = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-center bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700">
      <h3 className="text-2xl font-bold text-white mb-4">
        Prêt à sécuriser votre projet ?
      </h3>
      <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
        Découvrez nos formules flexibles et choisissez l’abonnement qui correspond à vos besoins.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {/* Bouton Tarifs (ouvre le Dialog) */}
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 shadow-lg shadow-cyan-500/25"
            >
              Voir nos tarifs
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-4xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">Nos abonnements</DialogTitle>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
              {/* Offre Essentiel */}
              <div className="relative bg-gray-900/90 border border-gray-700 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg hover:shadow-cyan-500/10 transition">
                <h4 className="text-lg font-semibold text-white mb-2">Essentiel</h4>
                <p className="text-gray-400 mb-4">Pour démarrer en toute sécurité</p>
                <p className="text-3xl font-bold text-cyan-400 mb-6">49€<span className="text-base text-gray-400">/mois</span></p>
                <ul className="text-gray-300 text-sm space-y-2 mb-6">
                  <li>✔ Audit de sécurité basique</li>
                  <li>✔ Monitoring 24/7</li>
                  <li>✔ Support email</li>
                </ul>
                <Button className="w-full bg-cyan-500 hover:bg-cyan-600">Choisir</Button>
              </div>

              {/* Offre Pro */}
              <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 border-2 border-cyan-500 rounded-2xl p-6 flex flex-col items-center text-center shadow-xl shadow-cyan-500/20 scale-105">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  ⭐ Populaire
                </span>
                <h4 className="text-lg font-semibold text-white mb-2">Pro</h4>
                <p className="text-gray-400 mb-4">Notre formule la plus choisie</p>
                <p className="text-3xl font-bold text-cyan-400 mb-6">99€<span className="text-base text-gray-400">/mois</span></p>
                <ul className="text-gray-300 text-sm space-y-2 mb-6">
                  <li>✔ Audit de sécurité avancé</li>
                  <li>✔ Pentest trimestriel</li>
                  <li>✔ Support prioritaire</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">Choisir</Button>
              </div>

              {/* Offre Entreprise */}
              <div className="relative bg-gray-900/90 border border-gray-700 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg hover:shadow-cyan-500/10 transition">
                <h4 className="text-lg font-semibold text-white mb-2">Entreprise</h4>
                <p className="text-gray-400 mb-4">Solutions sur-mesure</p>
                <p className="text-3xl font-bold text-cyan-400 mb-6">Sur devis</p>
                <ul className="text-gray-300 text-sm space-y-2 mb-6">
                  <li>✔ Audit complet personnalisé</li>
                  <li>✔ Pentest mensuel</li>
                  <li>✔ Support dédié 24/7</li>
                </ul>
                <Button className="w-full bg-cyan-500 hover:bg-cyan-600">Me contacter</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Bouton qui scrolle vers #contact */}
        <Button 
          size="lg"
          onClick={scrollToContact}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg shadow-purple-500/25"
        >
          Demande de devis
        </Button>
      </div>
    </div>
  );
};

export default CtaSection;