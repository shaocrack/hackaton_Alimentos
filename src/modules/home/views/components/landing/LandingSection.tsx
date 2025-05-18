import ImpactMetric from "../metrics/ImpactMetric";
import {
  EmojiFoodBeverage,
  Favorite,
  Groups,
  Inventory2,
  VolunteerActivism,
} from "@mui/icons-material";
import "./LandingSection.css";

const LandingSection = () => {
  return (
    <section className="landing-section">
      <div className="overlay" />

      <div className="content-wrapper">
        <div className="text-button-section">
          <br/>
          <br/>
          <h1>
            ¡DONAR ES IGUAL A INVERTIR <br /> EN UN ECUADOR SIN HAMBRE, ÚNETE!
          </h1>

          <p>
            El sistema de gestión BAQ es integral y la participación de otros
            actores es indispensable, la empresa privada de alimentos y no
            alimentos, organizaciones sociales, instituciones educativas,
            organismos internacionales, empresa pública, colectivos y voluntarios.
          </p>
          <p>
            <em>Ser el puente entre la abundancia y la carencia de alimentos.</em>
          </p>
          <button className="donate-button">
            <Favorite style={{ marginRight: "8px" }} />
            Donar
          </button>
        </div>

        <div className="spacer" />

        <div className="metrics-section">
          <ImpactMetric icon={() => <Inventory2 />} label="Kilos Entregados" value={130919469} sub="2003–2024" />
          <ImpactMetric icon={() => <Groups />} label="Organizaciones Atendidas" value={149} sub="2024" />
          <ImpactMetric icon={() => <EmojiFoodBeverage />} label="Platos Entregados" value={38167550} sub="2003–2024" />
          <ImpactMetric icon={() => <VolunteerActivism />} label="Personas Beneficiadas" value={82973} suffix="/mes" />
          <ImpactMetric icon={() => <Favorite />} label="Voluntarios" value={701} sub="2024" />
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
