import "./FlexboxHolyAlbatross.css";
import { Button } from "@mui/material";
export const FlexboxHolyAlbatross = () => {
  return (
    <div style={{ paddingTop: 32 }}>
      <div className="containers">
        <div className="profile" />
        <div className="button-row">
          <Button variant="outlined" size="large">
            CTA exercitation.
          </Button>
          <Button variant="outlined" size="large">
            CTA Non proident.
          </Button>
          <Button variant="outlined" size="large">
            CTA Irure Non proident
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FlexboxHolyAlbatross;
