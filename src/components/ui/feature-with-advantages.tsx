import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Feature() {
  return (
    <div className="w-full py-2 lg:py-4">
      <div className="container mx-auto">
        <div className="flex gap-4 pt-2 lg:pt-4 pb-8 -mt-4 flex-col items-start">
          <div>
            <Badge>Task Management</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Organize Your Day Effortlessly!
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Stay productive with our simple yet powerful to-do list.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Easy Task Management</p>
                  <p className="text-muted-foreground text-sm">
                    Add, edit, and delete tasks with just a click.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Smart Reminders</p>
                  <p className="text-muted-foreground text-sm">
                    Never miss a task with timely reminders.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Custom Categories</p>
                  <p className="text-muted-foreground text-sm">
                    Organize your tasks into personal categories.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Sync Across Devices</p>
                  <p className="text-muted-foreground text-sm">
                    Access your to-do list from anywhere.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Dark Mode</p>
                  <p className="text-muted-foreground text-sm">
                    Work comfortably at any time of the day.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Productivity Analytics</p>
                  <p className="text-muted-foreground text-sm">
                    Track your progress and improve efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
