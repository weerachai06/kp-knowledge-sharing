import "./Sidebar.css";
import { forwardRef } from "react";
export type SideBarPropsType = React.PropsWithChildren<{
  isOpen?: boolean;
}>;

export const Sidebar = forwardRef((_, ref: React.LegacyRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className="sidebar--root">
      <h4>Est excepteur ea .</h4>
      <a>
        <span>Aes nostrud labore.</span>
      </a>
      <a>
        <span>Aes nostrud labore.</span>
      </a>
      <a>
        <span>Aes nostrud labore.</span>
      </a>
      <a>
        <span>Aes nostrud labore.</span>
      </a>
      <a>
        <span>Aes nostrud labore.</span>
      </a>
    </div>
  );
});

export default Sidebar;
