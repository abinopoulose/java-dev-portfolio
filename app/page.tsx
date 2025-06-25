'use client';

import HeroSection from './components/HeroSection';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SystemArchitecture from './components/SystemArchitecture';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import TechnicalMetrics from './components/TechnicalMetrics';
import ContactSection from './components/ContactSection';

export default function BackendPortfolio() {
	return (
		<main className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden">
			<HeroSection />
			{/* <SystemArchitecture /> */}
			{/* <TechnicalMetrics /> */}
			<ContactSection />
		</main>
	);
}
