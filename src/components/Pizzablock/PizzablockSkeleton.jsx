import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={317}
        height={376}
        viewBox="0 0 317 376"
        backgroundColor="#f4c7b8"
        foregroundColor="#ecebeb"

    >
        <circle cx="109" cy="109" r="109" />
        <rect x="0" y="239" rx="0" ry="0" width="215" height="26" />
        <rect x="0" y="279" rx="0" ry="0" width="215" height="62" />
    </ContentLoader>
)

export default Skeleton