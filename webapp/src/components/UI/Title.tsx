export function Title({ text }: { text: string }) {
    return (
        <h2 className="my-4 md:my-6 text-aqua-50 text-lg md:text-2xl lg:text-3xl xl:text-4xl">
            {text}
        </h2>
    )
}
