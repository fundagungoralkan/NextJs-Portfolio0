import Link from "next/link"; // Not: Bu Next.js'in Link'i
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { getMenuItems } from "@/helpers/misc";
import "./nav-item.scss";


const NavItem = ({ onLinkClick, ...rest }) => {
  const t = useTranslations("mainMenu");
  const pathname = usePathname();
  const menuItems = getMenuItems(t, pathname);

  return (
    <div {...rest} className="nav-container">
      {menuItems.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          scroll={true}
          className="nav-link"
          onClick={onLinkClick}
        >
          <i className={item.icon}></i> {item.title}
        </Link>
      ))}
    </div>
  );
};

export default NavItem;
