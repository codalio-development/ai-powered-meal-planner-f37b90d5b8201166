import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Input, Button, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Badge, Switch, Card, CardBody } from "@heroui/react";
import {
  MagnifyingGlassIcon,
  BellIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  UserCircleIcon,
  MapIcon,
  BookmarkIcon,
  HeartIcon,
  CalendarIcon
} from "@heroicons/react/24/outline";

export default function Layout({ children }) {
  const [search, setSearch] = useState("");
  const [isLight, setIsLight] = useState(() => {
    try {
      return !!(globalThis?.localStorage && globalThis.localStorage.getItem("theme") === "light");
    } catch {
      return false;
    }
  });
  const [notifications] = useState(3);

  const sidebarLinks = [
    { label: "Meal Plan", to: "/meal-plan", icon: CalendarIcon },
    { label: "Explore", to: "/explore", icon: MapIcon },
    { label: "Grocery List", to: "/grocery-list", icon: BookmarkIcon },
    { label: "Preferences", to: "/preferences", icon: Cog6ToothIcon },
    { label: "Favorites", to: "/favorites", icon: HeartIcon },
    { label: "Profile", to: "/profile", icon: UserCircleIcon }
  ];

  useEffect(() => {
    const root = typeof document !== "undefined" ? document.documentElement : null;
    if (root) {
      if (isLight) {
        root.setAttribute("data-theme", "light");
      } else {
        root.removeAttribute("data-theme");
      }
    }

    try {
      if (globalThis?.localStorage) {
        globalThis.localStorage.setItem("theme", isLight ? "light" : "dark");
      }
    } catch {
      // ignore storage write errors (e.g., privacy mode)
    }
  }, [isLight]);

  const toggleTheme = () => setIsLight((v) => !v);
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] flex">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 shrink-0 flex-col border-r border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-sm">
        <div className="p-5 border-b border-[var(--color-border)]">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[var(--color-primary)] text-[var(--color-text)] flex items-center justify-center shadow-primary">AI</div>
            <span className="text-[var(--color-text)] font-bold text-base leading-tight">AI-Powered Meal Planner</span>
          </Link>
        </div>
        <nav className="flex-1 p-4 flex flex-col gap-2">
          {sidebarLinks.map((item) => (
            <NavLink key={item.to} to={item.to} activeClassName="bg-[var(--color-primary)]/15 text-[var(--color-primary)]" className="flex items-center gap-3 px-3 py-2 rounded-xl transition-colors duration-200 hover:bg-[var(--color-primary)]/10">
              <item.icon className="w-5 h-5 text-[var(--color-text)]" />
              <span className="text-[var(--color-text)] text-sm font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="p-4">
          <Card className="bg-[var(--color-background)] border border-[var(--color-border)] rounded-2xl">
            <CardBody className="p-4">
              <p className="text-[var(--color-text)] text-sm">Tip: Use the generator to quickly create a plan that fits your goals.</p>
            </CardBody>
          </Card>
        </div>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header Bar */}
        <Navbar maxWidth="xl" className="sticky top-0 z-40 bg-[var(--color-background)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
          <NavbarContent justify="start" className="md:hidden">
            <NavbarMenuToggle className="text-[var(--color-text)]" />
            <NavbarBrand>
              <Link to="/" className="text-[var(--color-text)] font-semibold">AI-Powered Meal Planner</Link>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent justify="center" className="flex-1 px-4">
            <Input
              value={search}
              onValueChange={setSearch}
              label="Search recipes"
              labelPlacement="outside-top"
              classNames={{
                base: "w-full max-w-xl",
                inputWrapper: "input-focus-primary bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-xl",
                input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/60",
                label: "text-[var(--color-text)]"
              }}
              startContent={<MagnifyingGlassIcon className="w-4 h-4 text-[var(--color-text)]" />}
              placeholder="Search meals, cuisines, ingredients..."
            />
          </NavbarContent>

          <NavbarContent justify="end" className="items-center gap-3 pr-4">
            <NavbarItem className="hidden md:flex">
              <Switch isSelected={isLight} onValueChange={toggleTheme} size="sm" color="secondary" className="text-[var(--color-text)]">
                <span className="text-[var(--color-text)] text-sm">{isLight ? "Light" : "Dark"}</span>
              </Switch>
            </NavbarItem>

            <NavbarItem>
              <Dropdown>
                <DropdownTrigger>
                  <Button isIconOnly radius="lg" className="bg-[var(--color-surface)] border border-[var(--color-border)]">
                    <Badge content={notifications} color="danger" placement="top-right">
                      <BellIcon className="w-5 h-5 text-[var(--color-text)]" />
                    </Badge>
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Notifications" classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl min-w-[240px]" }}>
                  <DropdownItem key="n1" className="text-[var(--color-text)]">New recipe recommendations</DropdownItem>
                  <DropdownItem key="n2" className="text-[var(--color-text)]">Your plan is ready</DropdownItem>
                  <DropdownItem key="n3" className="text-[var(--color-text)]">3 items added to grocery list</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>

            <NavbarItem>
              <Dropdown>
                <DropdownTrigger>
                  <Button className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-2">
                    <div className="flex items-center gap-2">
                      <Avatar name="You" className="w-7 h-7" />
                      <ChevronDownIcon className="w-4 h-4 text-[var(--color-text)]" />
                    </div>
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="User menu" classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl min-w-[200px]" }}>
                  <DropdownItem key="profile" className="text-[var(--color-text)]" startContent={<UserCircleIcon className="w-4 h-4 text-[var(--color-text)]" />}>Profile</DropdownItem>
                  <DropdownItem key="settings" className="text-[var(--color-text)]" startContent={<Cog6ToothIcon className="w-4 h-4 text-[var(--color-text)]" />}>Settings</DropdownItem>
                  <DropdownItem key="logout" className="text-[var(--color-text)]" color="danger">Logout</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu className="bg-[var(--color-background)]/90 backdrop-blur-md border-t border-[var(--color-border)]">
            {sidebarLinks.map((item) => (
              <NavbarMenuItem key={item.to}>
                <Link to={item.to} className="flex items-center gap-3 px-2 py-2 rounded-lg text-[var(--color-text)] hover:text-[var(--color-primary)]">
                  <item.icon className="w-5 h-5 text-[var(--color-text)]" />
                  <span className="text-[var(--color-text)] text-sm">{item.label}</span>
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>

        {/* Content */}
        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
