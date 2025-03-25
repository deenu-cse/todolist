import { Hero7 } from "@/components/ui/modern-hero"

const demoData = {
    heading: "Simplify Your Day with Our To-Do List",
    description:
      "Stay organized and boost your productivity. Manage your tasks effortlessly with our easy-to-use and feature-rich to-do list app.",
    button: {
      text: "Start From Add Task",
      url: "/todo", 
    },
    reviews: {
        count: 200,
        avatars: [
            {
                src: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
                alt: "Avatar 1",
            },
            {
                src: "https://www.shadcnblocks.com/images/block/avatar-2.webp",
                alt: "Avatar 2",
            },
            {
                src: "https://www.shadcnblocks.com/images/block/avatar-3.webp",
                alt: "Avatar 3",
            },
            {
                src: "https://www.shadcnblocks.com/images/block/avatar-4.webp",
                alt: "Avatar 4",
            },
            {
                src: "https://www.shadcnblocks.com/images/block/avatar-5.webp",
                alt: "Avatar 5",
            },
        ],
    },
};

const Testomonials = () => {
    return <Hero7 {...demoData} />;
}

export default Testomonials;
