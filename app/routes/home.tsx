import { Link, redirect } from "react-router";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { useEffect, useState } from "react";
import { account } from "~/appwrite/client";

const FeatureCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
    <div className="bg-white rounded-xl p-4 md:p-6 shadow-300 hover:shadow-200 transition-shadow">
        <div className="mb-3 md:mb-4">
            <img src={icon} alt={title} className="size-10 md:size-12" />
        </div>
        <h3 className="text-base md:text-lg font-semibold text-dark-100 mb-2">{title}</h3>
        <p className="text-gray-100 text-xs md:text-sm leading-relaxed">{description}</p>
    </div>
)

const TestimonialCard = ({ name, image, rating, review }: { name: string; image: string; rating: number; review: string }) => (
    <div className="bg-white rounded-xl p-4 md:p-6 shadow-300">
        <div className="flex items-center gap-3 mb-3 md:mb-4">
            <img src={image} alt={name} className="size-10 md:size-12 rounded-full" />
            <div>
                <h4 className="text-sm md:text-base font-semibold text-dark-100">{name}</h4>
                <div className="flex items-center gap-1">
                    {Array(5).fill('').map((_, i) => (
                        <img
                            key={i}
                            src="/assets/icons/star.svg"
                            alt="star"
                            className={`size-3 md:size-4 ${i < rating ? 'opacity-100' : 'opacity-30'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
        <p className="text-gray-100 text-xs md:text-sm italic leading-relaxed">"{review}"</p>
    </div>
)

const SectionHeader = ({ title, description }: { title: string; description: string }) => (
    <header className="text-center mb-8 md:mb-12">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-dark-100 mb-2 md:mb-3">{title}</h1>
        <p className="text-sm md:text-lg text-gray-100 font-normal max-w-2xl mx-auto px-4">{description}</p>
    </header>
)

const StepCard = ({ step, title, description }: { step: number; title: string; description: string }) => (
    <div className="text-center">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
            <span className="text-lg md:text-2xl font-bold text-white">{step}</span>
        </div>
        <h3 className="text-base md:text-xl font-semibold text-dark-100 mb-2">{title}</h3>
        <p className="text-gray-100 text-xs md:text-sm leading-relaxed px-2">{description}</p>
    </div>
)

const Home = () => {

    const [getUser, setGetUser] = useState("");

    useEffect(() => {
      const getUser = async () => {
        const user = await account.get();
        // if (!user) return redirect("/sign-in");
        setGetUser(user.$id);
      };

      getUser();
    }, []);

    return (
        <main className="flex flex-col">
            <nav className="bg-white border-b border-gray-200 top-0 z-50">
                <div className="wrapper">
                    <div className="flex justify-between items-center py-3 md:py-4">
                        <Link to="/" className="flex items-center gap-2">
                            <img
                                src="/assets/icons/logo.svg"
                                alt="Tourvisto Logo"
                                className="size-6 md:size-8"
                            />
                            <h1 className="text-lg md:text-xl font-bold text-dark-100">Tourvisto</h1>
                        </Link>
                        
                        <aside className="hidden md:flex items-center gap-6">
                            {
                                getUser == "" ?

                            <Link to="/sign-in">
                                <ButtonComponent type="button" className="button-class !h-9 !px-4 !text-sm">
                                    <span className="font-semibold text-white">Sign In</span>
                                </ButtonComponent>
                            </Link> :
                             <Link to="/dashboard">
                                <ButtonComponent type="button" className="button-class !h-9 !px-4 !text-sm">
                                    <span className="font-semibold text-white">Dashboard</span>
                                </ButtonComponent>
                            </Link>
                            }
                        </aside>
                        
                        <div className="md:hidden">
                            <img src="/assets/icons/menu.svg" alt="menu" className="size-5" />
                        </div>
                    </div>
                </div>
            </nav>

            <section className="travel-hero min-h-screen flex items-center">
                <div className="flex flex-col bg-linear100 bg-cover w-full">
                    <section className="wrapper py-16 md:py-24 lg:py-32 justify-center items-start flex flex-col gap-6">
                        <article className="flex flex-col w-full max-w-4xl gap-4 md:gap-6">
                            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 w-fit">
                                <img src="/assets/icons/magic-star.svg" alt="AI" className="size-4 md:size-5" />
                                <span className="text-xs md:text-sm font-medium text-dark-100">AI-Powered Travel Planning</span>
                            </div>
                            
                            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-dark-100 leading-tight">
                                Plan Your Perfect <br /> Trip with AI
                            </h1>
                            
                            <p className="text-sm md:text-lg lg:text-xl font-normal text-dark-400 leading-relaxed max-w-2xl">
                                Create personalized travel itineraries in minutes. Our AI analyzes your preferences to craft unique adventures tailored just for you.
                            </p>
                            
                            <div className="flex bg-none flex-col sm:flex-row gap-3 md:gap-4 mt-4 md:mt-6">
                                {
                                    getUser == "" ? 
                                <Link to="/sign-in">
                                    <ButtonComponent type="button" className="button-class !h-11 md:!h-12 !w-full sm:!w-[180px] md:!w-[200px]">
                                        <img src="/assets/icons/magic-star.svg" alt="AI" className="size-4 md:size-5" />
                                        <span className="text-sm md:text-base font-semibold text-white">Get Started</span>
                                    </ButtonComponent>
                                </Link>
                                :
                                <Link to="/dashboard">
                                    <ButtonComponent type="button" className="button-class !h-11 md:!h-12 !w-full sm:!w-[180px] md:!w-[200px]">
                                        <img src="/assets/icons/magic-star.svg" alt="AI" className="size-4 md:size-5" />
                                        <span className="text-sm md:text-base font-semibold text-white">Get Started</span>
                                    </ButtonComponent>
                                </Link>
                                }
                            </div>
                        </article>
                        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-6 md:mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 w-full max-w-lg">
                            <div className="text-center bg-none">
                                <div className="text-lg md:text-2xl font-bold text-dark-100">10K+</div>
                                <div className="text-xs md:text-sm text-dark-400">Happy Travelers</div>
                            </div>
                            <div className="text-center bg-none">
                                <div className="text-lg md:text-2xl font-bold text-dark-100">50+</div>
                                <div className="text-xs md:text-sm text-dark-400">Destinations</div>
                            </div>
                            <div className="text-center bg-none">
                                <div className="text-lg md:text-2xl font-bold text-dark-100">99%</div>
                                <div className="text-xs md:text-sm text-dark-400">Satisfaction</div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <section id="features" className="py-12 md:py-20 bg-light-200">
                <div className="wrapper">
                    <SectionHeader 
                        title="Why Choose Tourvisto?" 
                        description="Experience the future of travel planning with our AI-powered platform" 
                    />
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                        <FeatureCard
                            icon="/assets/icons/magic-star.svg"
                            title="AI-Powered Recommendations"
                            description="Our intelligent system creates personalized itineraries based on your preferences and travel style."
                        />
                        <FeatureCard
                            icon="/assets/icons/itinerary.svg"
                            title="Detailed Itineraries"
                            description="Get day-by-day plans with activities, dining, and transportation recommendations."
                        />
                        <FeatureCard
                            icon="/assets/icons/destination.svg"
                            title="50+ Destinations"
                            description="Explore amazing destinations worldwide with expertly curated travel experiences."
                        />
                        <FeatureCard
                            icon="/assets/icons/calendar.svg"
                            title="Flexible Planning"
                            description="Easily customize your trip duration, budget, and activities to match your needs."
                        />
                        <FeatureCard
                            icon="/assets/icons/users.svg"
                            title="Group-Friendly"
                            description="Perfect for solo travelers, couples, families, or groups of friends."
                        />
                        <FeatureCard
                            icon="/assets/icons/check.svg"
                            title="Instant Results"
                            description="Get your complete travel plan in minutes, not hours or days."
                        />
                    </div>
                </div>
            </section>

            {/* How it Works Section - Responsive */}
            <section id="how-it-works" className="py-12 md:py-20">
                <div className="wrapper">
                    <SectionHeader 
                        title="How Tourvisto Works" 
                        description="Get your personalized travel itinerary in just 3 simple steps"
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        <StepCard
                            step={1}
                            title="Tell Us Your Preferences"
                            description="Choose your destination, travel style, budget, and group type."
                        />
                        <StepCard
                            step={2}
                            title="AI Creates Your Itinerary"
                            description="Our AI analyzes millions of data points to craft your perfect trip."
                        />
                        <StepCard
                            step={3}
                            title="Start Your Adventure"
                            description="Download your itinerary and enjoy your perfectly planned trip!"
                        />
                    </div>
                </div>
            </section>

            <section id="testimonials" className="py-12 md:py-20 bg-light-200">
                <div className="wrapper">
                    <SectionHeader 
                        title="What Our Travelers Say" 
                        description="Real experiences from real travelers who used Tourvisto"
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                        <TestimonialCard
                            name="Sarah Johnson"
                            image="/assets/images/david.webp"
                            rating={5}
                            review="Tourvisto made planning my Japan trip so easy! The AI recommendations were spot-on and saved me hours of research."
                        />
                        <TestimonialCard
                            name="Mike Chen"
                            image="/assets/images/james.webp"
                            rating={5}
                            review="Best travel planning tool I've ever used. The itinerary was perfect for our family vacation to Europe."
                        />
                        <TestimonialCard
                            name="Emily Davis"
                            image="/assets/images/michael.webp"
                            rating={4}
                            review="Amazing experience! The AI understood exactly what we wanted for our honeymoon. Highly recommended!"
                        />
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-20 bg-primary-100">
                <div className="wrapper text-center">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-3 md:mb-4">Ready to Plan Your Dream Trip?</h2>
                        <p className="text-sm md:text-lg text-white/90 mb-6 md:mb-8 leading-relaxed">
                            Join thousands of travelers who trust Tourvisto for their perfect vacation planning.
                        </p>
                        {
                            getUser == "" ?
                        <Link to="/sign-in">
                            <ButtonComponent type="button" className="!bg-white !text-primary-100 hover:!bg-gray-50 !h-11 md:!h-12 !w-full sm:!w-auto !px-8 md:!px-12 !rounded-lg !flex !items-center !justify-center !gap-2 mx-auto">
                                {/* <img src="/assets/icons/magic-star.svg" alt="AI" className="size-4 md:size-5" /> */}
                                <span className="text-sm md:text-base font-semibold">Sign In to Get Started</span>
                            </ButtonComponent>
                        </Link>
                        :
                         <Link to="/dashboard">
                                <ButtonComponent type="button" className="!bg-white !text-primary-100 hover:!bg-gray-50 !h-11 md:!h-12 !w-full sm:!w-auto !px-8 md:!px-12 !rounded-lg !flex !items-center !justify-center !gap-2 mx-auto">
                                {/* <img src="/assets/icons/magic-star.svg" alt="AI" className="size-4 md:size-5" /> */}
                                <span className="text-sm md:text-base font-semibold">Get Started</span>
                            </ButtonComponent>
                            </Link>

                        }
                    </div>
                </div>
            </section>

            <footer className="bg-white border-t border-gray-200 py-8 md:py-12">
                <div className="wrapper">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
                        <div className="col-span-1 md:col-span-2">
                            <Link to="/" className="flex items-center gap-2 mb-3 md:mb-4">
                                <img
                                    src="/assets/icons/logo.svg"
                                    alt="Tourvisto Logo"
                                    className="size-6 md:size-8"
                                />
                                <h2 className="text-xl md:text-2xl font-bold text-dark-100">Tourvisto</h2>
                            </Link>
                            <p className="text-gray-100 text-xs md:text-sm max-w-md leading-relaxed">
                                AI-powered travel planning that creates personalized itineraries for your perfect trip. Discover amazing destinations and create unforgettable memories.
                            </p>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold text-dark-100 mb-3 md:mb-4 text-sm md:text-base">Quick Links</h3>
                            <ul className="space-y-2 text-gray-100 text-xs md:text-sm">
                                <li><Link to="#features" className="hover:text-dark-100 transition-colors">Features</Link></li>
                                <li><Link to="#how-it-works" className="hover:text-dark-100 transition-colors">How it Works</Link></li>
                                <li><Link to="#testimonials" className="hover:text-dark-100 transition-colors">Reviews</Link></li>
                                <li><Link to="/sign-in" className="hover:text-dark-100 transition-colors">Get Started</Link></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold text-dark-100 mb-3 md:mb-4 text-sm md:text-base">Support</h3>
                            <ul className="space-y-2 text-gray-100 text-xs md:text-sm">
                                <li><Link to="/" className="hover:text-dark-100 transition-colors">Help Center</Link></li>
                                <li><Link to="/" className="hover:text-dark-100 transition-colors">Contact Us</Link></li>
                                <li><Link to="/" className="hover:text-dark-100 transition-colors">Terms & Conditions</Link></li>
                                <li><Link to="/" className="hover:text-dark-100 transition-colors">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-6 md:pt-8 text-center">
                        <p className="text-gray-100 text-xs md:text-sm">
                            © 2024 Tourvisto. All rights reserved. Made with ❤️ for travelers worldwide.
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    )
}

export default Home