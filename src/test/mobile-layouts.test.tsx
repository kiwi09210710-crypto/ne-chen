import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { LanguageProvider } from "@/contexts/LanguageContext";
import AboutMe from "@/pages/AboutMe";
import CaseAdOptimization from "@/pages/CaseAdOptimization";
import CaseKolKoc from "@/pages/CaseKolKoc";
import CaseSocialMedia from "@/pages/CaseSocialMedia";
import CaseProductSeo from "@/pages/CaseProductSeo";
import { HeroSection } from "@/components/sections/HeroSection";

function renderPage(node: React.ReactNode, initialEntries: string[] = ["/"]) {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <LanguageProvider>{node}</LanguageProvider>
    </MemoryRouter>
  );
}

describe("mobile-first page layouts", () => {
  it("renders the about page hero as a stacked mobile-first card without fixed inline sizing", () => {
    const { container } = renderPage(<AboutMe />, ["/about-me"]);

    const heroCard = container.querySelector("[data-testid='about-hero-card']");
    const introBlock = container.querySelector("[data-testid='about-intro-block']");

    expect(heroCard).toHaveClass("flex-col");
    expect(heroCard).toHaveClass("lg:flex-row");
    expect(heroCard).not.toHaveStyle({ maxHeight: "250px" });
    expect(introBlock).not.toHaveStyle({ maxWidth: "50%" });
  });

  it("renders the social case cards without nested mobile scroll regions", () => {
    const { container } = renderPage(<CaseSocialMedia />, ["/case/social-media"]);

    const nestedScrollAreas = Array.from(container.querySelectorAll("div")).filter((node) =>
      node.className.includes("overflow-y-auto")
    );

    expect(nestedScrollAreas).toHaveLength(0);
  });

  it("renders the SEO case section copy without desktop-only left padding on mobile", () => {
    const { container } = renderPage(<CaseProductSeo />, ["/case/product-seo"]);

    const sectionLead = container.querySelector("[data-testid='case-product-section-lead']");

    expect(sectionLead).toHaveClass("pl-0");
    expect(sectionLead).toHaveClass("sm:pl-[52px]");
  });

  it("renders the ad optimization case cards without nested mobile scroll and fixed mobile image widths", () => {
    const { container } = renderPage(<CaseAdOptimization />, ["/case/ad-optimization"]);

    const nestedScrollAreas = Array.from(container.querySelectorAll("div")).filter((node) =>
      node.className.includes("overflow-y-auto")
    );
    const hotelImageColumn = container.querySelector("[data-testid='ad-case-hotel-image']");
    const kidsImageColumn = container.querySelector("[data-testid='ad-case-kids-image']");

    expect(nestedScrollAreas).toHaveLength(0);
    expect(hotelImageColumn).toHaveClass("w-full");
    expect(hotelImageColumn).toHaveClass("lg:w-[50%]");
    expect(kidsImageColumn).toHaveClass("w-full");
    expect(kidsImageColumn).toHaveClass("lg:w-[40%]");
  });

  it("renders the KOL/KOC workflow and case intro without forcing horizontal mobile layouts", () => {
    const { container } = renderPage(<CaseKolKoc />, ["/case/kol-koc"]);

    const workflowRail = container.querySelector("[data-testid='koc-workflow-rail']");
    const caseLead = container.querySelector("[data-testid='koc-case-lead']");

    expect(workflowRail).not.toHaveClass("overflow-x-auto");
    expect(workflowRail).not.toHaveClass("min-w-[800px]");
    expect(caseLead).toHaveClass("ml-0");
    expect(caseLead).toHaveClass("sm:ml-[52px]");
  });

  it("renders the hero section with tighter mobile-first spacing while preserving desktop layout hooks", () => {
    const { container } = renderPage(<HeroSection />);

    const heroSection = container.querySelector("[data-testid='home-hero']");
    const heroTitle = container.querySelector("[data-testid='home-hero-title']");
    const heroPhoto = container.querySelector("[data-testid='home-hero-photo']");
    const scrollIndicator = container.querySelector("[data-testid='home-hero-scroll']");

    expect(heroSection).toHaveClass("pt-28");
    expect(heroSection).toHaveClass("sm:pt-32");
    expect(heroSection).toHaveClass("lg:pt-44");
    expect(heroTitle).toHaveClass("text-4xl");
    expect(heroTitle).toHaveClass("sm:text-6xl");
    expect(heroPhoto).toHaveClass("h-60");
    expect(heroPhoto).toHaveClass("sm:h-72");
    expect(scrollIndicator).toHaveClass("hidden");
    expect(scrollIndicator).toHaveClass("md:flex");
  });

  it("prioritizes the homepage hero image while deferring content-heavy images", () => {
    const heroRender = renderPage(<HeroSection />);
    const heroImage = heroRender.container.querySelector(
      "[data-testid='home-hero-photo'] img"
    );

    expect(heroImage).toHaveAttribute("loading", "eager");
    expect(heroImage).toHaveAttribute("fetchpriority", "high");

    cleanup();

    const aboutRender = renderPage(<AboutMe />, ["/about-me"]);
    const aboutImages = aboutRender.container.querySelectorAll("img");
    const contentImage = aboutImages[1];

    expect(contentImage).toHaveAttribute("loading", "lazy");
    expect(contentImage).toHaveAttribute("decoding", "async");
  });

  it("keeps key page titles visible after the responsive refactor", () => {
    renderPage(<AboutMe />, ["/about-me"]);
    expect(screen.getByText("陳恩頤 Alisa Chen")).toBeInTheDocument();

    cleanup();
    renderPage(<CaseSocialMedia />, ["/case/social-media"]);
    expect(
      screen.getByRole("heading", { name: "社群操作成效" })
    ).toBeInTheDocument();

    cleanup();
    renderPage(<CaseProductSeo />, ["/case/product-seo"]);
    expect(
      screen.getByRole("heading", { name: "Landing Page 產品說明頁企劃" })
    ).toBeInTheDocument();
  });
});
