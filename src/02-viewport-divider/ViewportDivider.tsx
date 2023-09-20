import "./ViewportDivider.css";
export const ViewportDivider = () => {
  return (
    <>
      <div className="viewport-divider">
        <h1>Consequat dolore amet commodo sint sunt fugi</h1>
        <p>
          Quis qui et magna nostrud aliqua occaecat ut duis eiusmod in consequat
          sunt commodo voluptate. Dolor Lorem ad ullamco anim culpa incididunt
          non. Ullamco sint cillum quis id dolore eiusmod fugiat reprehenderit
          enim amet aliqua mollit quis. Lorem sunt do enim dolore labore ex.
          Lorem eu dolor cillum elit. Anim consectetur labore officia duis sint
          consequat cupidatat aute et deserunt sint id. Commodo laborum irure
          irure sunt irure non ipsum nostrud elit ipsum. Magna incididunt
          aliquip deserunt cillum proident cillum ex pariatur. Aute ipsum magna
          culpa aliqua commodo in excepteur. Reprehenderit voluptate mollit et
          incididunt pariatur. Laborum exercitation duis anim adipisicing eu.
          Non nisi ex voluptate sit consequat do ea consequat laborum nulla
          labore deserunt velit qui. Laboris irure esse enim consectetur dolor.
          Commodo quis dolor quis sint laboris magna qui incididunt cupidatat
          eiusmod.
        </p>
      </div>

      {/* ตรงนี้ไม่ต้องสนใจ mock mock เอาเฉย ๆ */}
      <div style={{ display: "flex", padding: 24 }}>
        <div
          style={{
            width: 200,
            display: "flex",
            flexDirection: "column",
            gap: 32,
          }}
        >
          <div
            style={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              backgroundColor: "rebeccapurple",
              display: "block",
            }}
          />
          <div
            style={{
              width: 200,
              height: 200,
              backgroundColor: "teal",
              display: "block",
            }}
          />
        </div>
        <div style={{ flex: 1, paddingLeft: 24 }}>
          <h3>In aliquip elit ullamco aliqua nisi culpa ea nulla eu.</h3>
          <p>
            Veniam fugiat sit veniam ea minim veniam ex nostrud culpa nulla
            proident sint aute. Officia qui cillum exercitation mollit sit.
            Lorem duis id sit elit non amet quis do. Labore deserunt incididunt
            cupidatat incididunt. Proident duis ea in excepteur eu. Nulla culpa
            et aute amet qui aliqua labore laborum id pariatur sit pariatur ad
            nisi. Voluptate velit ullamco ad enim nostrud tempor veniam nulla
            laborum esse duis anim ut. Adipisicing velit proident esse est elit
            dolor excepteur. Voluptate eu aliquip ad dolor deserunt magna mollit
            proident dolor laborum esse anim nisi. Consequat ut nulla nostrud
            dolor laborum do irure laboris reprehenderit. Sunt elit laboris nisi
            incididunt. Amet irure aliquip deserunt ex reprehenderit Lorem
          </p>
        </div>
      </div>
    </>
  );
};

export default ViewportDivider;
