import { Hero } from "@/components/ui/hero"

const HeroPage = () => {
    return (
        <Hero
            title="Organize Your Day, Your Way."
            subtitle="Boost your productivity with a sleek, modern to-do list. Manage tasks effortlessly and stay on top of your goals."
            actions={[
                {
                    label: "Add Task",
                    href: "/todo",
                    variant: "default",
                },
            ]}
            titleClassName="text-4xl md:text-5xl font-extrabold"
            subtitleClassName="text-lg md:text-xl max-w-[600px]"
            actionsClassName="mt-8"
        />
    );
}

export default HeroPage