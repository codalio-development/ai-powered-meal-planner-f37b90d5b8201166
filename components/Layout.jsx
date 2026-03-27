
        import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, Badge, Switch, Button, Card, CardBody } from "@heroui/react";
import {
  HomeIcon,
  CalendarIcon,
  MapIcon,
  BellIcon,
  UserIcon,
  HeartIcon,
  BookmarkIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon
} from "@heroicons/react/24/outline";
        export default function Layout({ children }) {
  const { pathname } = useLocation();
  const [theme, setTheme] = useState('dark');
  const [search, setSearch] = useState('');

  useEffect(() => {
  if (typeof document !== 'undefined') {
  document.documentElement.setAttribute('data-theme', theme);
  }
  }, [theme]);

  const handleThemeToggle = (isSelected) => {
  setTheme(isSelected ? 'light' : 'dark');
  };
        return (
            <div className="flex h-screen bg-[var(--color-background)] text-[var(--color-text)]">
    {/* Sidebar */}
    <aside className="hidden md:flex w-64 shrink-0 flex-col gap-4 border-r border-[var(--color-border)] p-4">
    <div className="flex items-center gap-2 px-2">
    <div className="w-9 h-9 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center shadow-primary">
    <HomeIcon className="w-5 h-5 text-[var(--color-primary)]" />
    </div>
    <span className="text-[var(--color-text)] font-bold text-lg">AI-Powered Meal Planner</span>
    </div>

    <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
    <CardBody className="flex flex-col gap-1 p-2">
    <NavLink to="/" activeClassName="bg-[var(--color-primary)]/15 text-[var(--color-primary)]" className="group rounded-xl px-3 py-2 transition-colors duration-200 flex items-center gap-3 hover:bg-[var(--color-primary)]/10">
    <HomeIcon className="w-5 h-5 text-[var(--color-text)] group-[.active]:text-[var(--color-primary)]" />
    <span className="text-sm text-[var(--color-text)] group-[.active]:text-[var(--color-primary)]">Home</span>
    </NavLink>
    <NavLink to="/meal-plan" activeClassName="bg-[var(--color-primary)]/15 text-[var(--color-primary)]" className="group rounded-xl px-3 py-2 transition-colors duration-200 flex items-center gap-3 hover:bg-[var(--color-primary)]/10">
    <CalendarIcon className="w-5 h-5 text-[var(--color-text)] group-[.active]:text-[var(--color-primary)]" />
    <span className="text-sm text-[var(--color-text)] group-[.active]:text-[var(--color-primary)]">Meal Plan</span>
    </NavLink>
    <NavLink to="/explore" activeClassName="bg-[var(--color-primary)]/15 text-[var(--color-primary)]" className="group rounded-xl px-3 py-2 transition-colors duration-200 flex items-center gap-3 hover:bg-[var(--color-primary)]/10">
    <MapIcon className="w-5 h-5 text-[var(--color-text)] group-[.active]:text-[var(--color-primary)]" />
    <span className="text-sm text-[var(--color-text)] group-[.active]:text-[var(--color-primary)]">Explore</span>
    </NavLink>
    <NavLink to="/grocery-list" activeClassName="bg-[var(--color-primary)]/15 text-[var(--color-primary)]" className="group rounded-xl px-3 py-2 transition-colors duration-200 flex items-center gap-3 hover:bg-[var(--color-primary)]/10">
    <BookmarkIcon className="w-5 h-5 text-[var(--color-text)] group-[.active]:text-[var(--color-primary)]" />
    <span className="text-sm text-[var(--color-text)] group-[.active]:text-[var(--color-primary)]">Grocery List</span>
    </NavLink>
    <NavLink to="/preferences" activeClassName="bg-[var(--color-primary)]/15 text-[var(--color-primary)]" className="group rounded-xl px-3 py-2 transition-colors duration-200 flex items-center gap-3 hover:bg-[var(--color-primary)]/10">
    <Cog6ToothIcon className="w-5 h-5 text-[var(--color-text)] group-[.active]:text-[var(--color-primary)]" />
    <span className="text-sm text-[var(--color-text)] group-[.active]:text-[var(--color-primary)]">Preferences</span>
    </NavLink>
    <NavLink to="/favorites" activeClassName="bg-[var(--color-primary)]/15 text-[var(--color-primary)]" className="group rounded-xl px-3 py-2 transition-colors duration-200 flex items-center gap-3 hover:bg-[var(--color-primary)]/10">
    <HeartIcon className="w-5 h-5 text-[var(--color-text)] group-[.active]:text-[var(--color-primary)]" />
    <span className="text-sm text-[var(--color-text)] group-[.active]:text-[var(--color-primary)]">Favorites</span>
    </NavLink>
    <NavLink to="/profile" activeClassName="bg-[var(--color-primary)]/15 text-[var(--color-primary)]" className="group rounded-xl px-3 py-2 transition-colors duration-200 flex items-center gap-3 hover:bg-[var(--color-primary)]/10">
    <UserIcon className="w-5 h-5 text-[var(--color-text)] group-[.active]:text-[var(--color-primary)]" />
    <span className="text-sm text-[var(--color-text)] group-[.active]:text-[var(--color-primary)]">Profile</span>
    </NavLink>
    </CardBody>
    </Card>

    <div className="mt-auto p-3 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)]">
    <p className="text-[var(--color-text)] text-sm">Tip: Use preferences to tailor meal plans to your goals.</p>
    </div>
    </aside>

    {/* Content area */}
    <div className="flex-1 flex flex-col min-w-0">
    {/* Header Bar */}
    <Navbar maxWidth="xl" className="sticky top-0 z-40 backdrop-blur-md bg-[var(--color-background)]/80 text-[var(--color-text)] border-b border-[var(--color-border)]">
    <NavbarContent justify="start" className="md:hidden">
    <NavbarMenuToggle className="text-[var(--color-text)]" />
    <NavbarBrand>
    <span className="font-semibold text-[var(--color-text)]">AI-Powered Meal Planner</span>
    </NavbarBrand>
    </NavbarContent>

    <NavbarContent className="hidden md:flex gap-4" justify="start">
    <NavbarBrand>
    <span className="font-semibold text-[var(--color-text)]">Dashboard</span>
    </NavbarBrand>
    </NavbarContent>

    <NavbarContent className="flex-1 max-w-xl">
    <Input
    aria-label="Search recipes"
    size="sm"
    value={search}
    onValueChange={setSearch}
    placeholder="Search recipes, cuisines, ingredients..."
    startContent={<MagnifyingGlassIcon className="w-4 h-4 text-[var(--color-text)]" />}
    classNames={{
    base: "w-full",
    inputWrapper: "h-10 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl",
    input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]",
    label: "text-[var(--color-text)]"
    }}
    />
    </NavbarContent>

    <NavbarContent justify="end" className="items-center gap-2 pr-2">
    <Switch
    size="sm"
    isSelected={theme === 'light'}
    onValueChange={handleThemeToggle}
    className="text-[var(--color-text)]"
    >
    <span className="text-xs text-[var(--color-text)] hidden lg:inline">{theme === 'light' ? 'Light' : 'Dark'}</span>
    </Switch>

    <Dropdown>
    <DropdownTrigger>
    <Button isIconOnly className="rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
    <Badge content={3} color="danger">
    <BellIcon className="w-5 h-5 text-[var(--color-text)]" />
    </Badge>
    </Button>
    </DropdownTrigger>
    <DropdownMenu aria-label="Notifications" classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl min-w-[260px]" }}>
    <DropdownItem key="n1" className="text-[var(--color-text)]">New recommended recipes available</DropdownItem>
    <DropdownItem key="n2" className="text-[var(--color-text)]">Your plan is ready</DropdownItem>
    <DropdownItem key="n3" className="text-[var(--color-text)]">Grocery list updated</DropdownItem>
    </DropdownMenu>
    </Dropdown>

    <Dropdown>
    <DropdownTrigger>
    <Button className="px-2 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
    <div className="flex items-center gap-2">
    <Avatar name="User" size="sm" className="w-7 h-7" />
    <span className="hidden md:inline text-[var(--color-text)] text-sm">Account</span>
    </div>
    </Button>
    </DropdownTrigger>
    <DropdownMenu aria-label="User Menu" classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl min-w-[200px]" }}>
    <DropdownItem key="profile" className="text-[var(--color-text)]">Profile</DropdownItem>
    <DropdownItem key="settings" className="text-[var(--color-text)]">Settings</DropdownItem>
    <DropdownItem key="logout" className="text-[var(--color-text)]" color="danger">Logout</DropdownItem>
    </DropdownMenu>
    </Dropdown>
    </NavbarContent>

    <NavbarMenu className="bg-[var(--color-background)]/90 backdrop-blur-md border-t border-[var(--color-border)]">
    <NavbarMenuItem>
    <NavLink to="/" className="block rounded-xl px-2 py-2 text-[var(--color-text)] hover:text-[var(--color-primary)]">Home</NavLink>
    </NavbarMenuItem>
    <NavbarMenuItem>
    <NavLink to="/meal-plan" className="block rounded-xl px-2 py-2 text-[var(--color-text)] hover:text-[var(--color-primary)]">Meal Plan</NavLink>
    </NavbarMenuItem>
    <NavbarMenuItem>
    <NavLink to="/explore" className="block rounded-xl px-2 py-2 text-[var(--color-text)] hover:text-[var(--color-primary)]">Explore</NavLink>
    </NavbarMenuItem>
    <NavbarMenuItem>
    <NavLink to="/grocery-list" className="block rounded-xl px-2 py-2 text-[var(--color-text)] hover:text-[var(--color-primary)]">Grocery List</NavLink>
    </NavbarMenuItem>
    <NavbarMenuItem>
    <NavLink to="/preferences" className="block rounded-xl px-2 py-2 text-[var(--color-text)] hover:text-[var(--color-primary)]">Preferences</NavLink>
    </NavbarMenuItem>
    <NavbarMenuItem>
    <NavLink to="/favorites" className="block rounded-xl px-2 py-2 text-[var(--color-text)] hover:text-[var(--color-primary)]">Favorites</NavLink>
    </NavbarMenuItem>
    <NavbarMenuItem>
    <NavLink to="/profile" className="block rounded-xl px-2 py-2 text-[var(--color-text)] hover:text-[var(--color-primary)]">Profile</NavLink>
    </NavbarMenuItem>
    </NavbarMenu>
    </Navbar>

    <main className="flex-1 overflow-y-auto p-4 bg-[var(--color-background)] text-[var(--color-text)]">{children}</main>
    </div>
    </div>
        );
        }
