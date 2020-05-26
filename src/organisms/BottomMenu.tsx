import * as React from 'react';
import { Menu, Size } from "@molecules/Menu";

export const BottomMenu: React.FC = () => {
    const items = [
        {
          label: "Contact",
          to: "/contact",
        },
        {
          label: "Terms of service",
          to: "/terms-of-service",
        },
        {
          label: "Privacy policy",
          to: "privacy",
        },
        {
          label: "FAQ",
          to: "faq",
        },
    ]
    return <Menu items={ items } size={ Size.small } />
}
