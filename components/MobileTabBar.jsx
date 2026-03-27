
        import React from "react";
import { Navbar, NavbarContent, NavbarItem, Button, Badge } from "@heroui/react";
import { NavLink } from "react-router-dom";
import { HomeIcon, CalendarIcon, MapIcon, HeartIcon } from "@heroicons/react/24/outline";
        export default function MobileTabBar({}) {
        return (
            <Navbar maxWidth="xl" className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--color-surface)]/95 border-t border-[var(--color-border)] backdrop-blur-md">
    <NavbarContent justify="center" className="w-full grid grid-cols-4 gap-2">
    <NavbarItem className="flex justify-center">
    <NavLink to="/" activeClassName="text-[var(--color-primary)]" className="flex flex-col items-center gap-1 p-2 rounded-xl text-[var(--color-text)]">
    <HomeIcon className="w-5 h-5" />
    <span className="text-[10px] text-[var(--color-text)]">Home</span>
    </NavLink>
    </NavbarItem>
    <NavbarItem className="flex justify-center">
    <NavLink to="/meal-plan" activeClassName="text-[var(--color-primary)]" className="flex flex-col items-center gap-1 p-2 rounded-xl text-[var(--color-text)]">
    <CalendarIcon className="w-5 h-5" />
    <span className="text-[10px] text-[var(--color-text)]">Plan</span>
    </NavLink>
    </NavbarItem>
    <NavbarItem className="flex justify-center">
    <NavLink to="/explore" activeClassName="text-[var(--color-primary)]" className="flex flex-col items-center gap-1 p-2 rounded-xl text-[var(--color-text)]">
    <MapIcon className="w-5 h-5" />
    <span className="text-[10px] text-[var(--color-text)]">Explore</span>
    </NavLink>
    </NavbarItem>
    <NavbarItem className="flex justify-center">
    <NavLink to="/favorites" activeClassName="text-[var(--color-primary)]" className="flex flex-col items-center gap-1 p-2 rounded-xl text-[var(--color-text)]">
    <Badge content="9+">
    <HeartIcon className="w-5 h-5" />
    </Badge>
    <span className="text-[10px] text-[var(--color-text)]">Favorites</span>
    </NavLink>
    </NavbarItem>
    </NavbarContent>
    </Navbar>
        );
        }
