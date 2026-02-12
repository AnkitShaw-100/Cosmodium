import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '@/components/ui/accordion'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const [longUrl, setLongUrl] = useState('')
    const navigate = useNavigate()

    const handleShorten = (e) => {
        e.preventDefault()
        if (longUrl) navigate(`/auth?createNew=${longUrl}`)
    }

    return (
        <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-5xl flex flex-col items-center min-h-screen py-8">
                {/* Heading */}
                <h2 className="mt-10 sm:mt-16 mb-8 text-center font-extrabold text-white leading-tight text-3xl sm:text-5xl lg:text-6xl xl:text-7xl">
                    The only URL Shortener <br />
                    you&rsquo;ll ever need! 👇
                </h2>

                {/* Form */}
                <form
                    onSubmit={handleShorten}
                    className="w-full max-w-3xl flex flex-col sm:flex-row gap-3 sm:gap-2"
                >
                    <Input
                        type="url"
                        value={longUrl}
                        onChange={(e) => setLongUrl(e.target.value)}
                        placeholder="Enter your loooong URL"
                        className="h-12 sm:h-14 flex-1 px-4 text-base sm:text-lg"
                    />

                    <Button
                        type="submit"
                        variant="destructive"
                        className="h-12 sm:h-14 px-6 text-base sm:text-lg w-full sm:w-auto"
                    >
                        Shorten!
                    </Button>
                </form>

                {/* Banner */}
                <div className="w-full max-w-4xl my-10 sm:my-14">
                    <img
                        src="/Banner.png"
                        alt="URL Shortener Banner"
                        className="w-full rounded-lg object-cover max-h-60 sm:max-h-96"
                    />
                </div>


                {/* FAQ */}
                <div className="w-full max-w-4xl mb-20 mt-6">
                    <h3 className="text-center text-white font-bold mb-8
    text-2xl sm:text-3xl lg:text-4xl">
                        Frequently Asked Questions
                    </h3>

                    <Accordion
                        type="multiple"
                        collapsible
                        className="w-full space-y-3"
                    >
                        <AccordionItem
                            value="item-1"
                            className="border border-white/10 rounded-lg px-4 sm:px-6"
                        >
                            <AccordionTrigger className="text-left text-white font-semibold
        text-base sm:text-lg lg:text-xl py-4">
                                How does the Cosmodium URL shortener work?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300
        text-sm sm:text-base lg:text-lg pb-4 leading-relaxed">
                                When you enter a long URL, our system generates a shorter version of that URL.
                                This shortened URL redirects to the original long URL when accessed.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-2"
                            className="border border-white/10 rounded-lg px-4 sm:px-6"
                        >
                            <AccordionTrigger className="text-left text-white font-semibold
        text-base sm:text-lg lg:text-xl py-4">
                                Do I need an account to use the app?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300
        text-sm sm:text-base lg:text-lg pb-4 leading-relaxed">
                                Yes. Creating an account allows you to manage your URLs, view analytics,
                                and customize your short URLs.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-3"
                            className="border border-white/10 rounded-lg px-4 sm:px-6"
                        >
                            <AccordionTrigger className="text-left text-white font-semibold
        text-base sm:text-lg lg:text-xl py-4">
                                What analytics are available for my shortened URLs?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300
        text-sm sm:text-base lg:text-lg pb-4 leading-relaxed">
                                You can view the number of clicks, geolocation data of clicks,
                                and device types (mobile/desktop) for each shortened URL.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

            </div>
        </div>
    )
}

export default LandingPage
