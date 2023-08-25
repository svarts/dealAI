"use client"

import Image from "next/image"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"

const UnlimitedAccounts = () => {
    return (
        <ParallaxProvider>
            <Parallax speed={-20}>
                <div>
                    <Image
                        src="./unlimited.svg"
                        alt="unlimited"
                        width={1400}
                        height={1000}
                        className="mt-28"
                    />
                </div>
            </Parallax>
        </ParallaxProvider>
    )
}

export default UnlimitedAccounts