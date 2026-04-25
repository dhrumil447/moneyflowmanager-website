import { Star } from "lucide-react";

const reviews = [
  {
    name: "Aarav Sharma",
    role: "Software Engineer",
    text: "Best personal finance app for daily tracking. Clean UI, fast, and the analytics actually helped me save more.",
  },
  {
    name: "Priya Mehta",
    role: "Designer",
    text: "I've tried five expense apps. MoneyFlow is the only one that stuck — it just feels right to use every day.",
  },
  {
    name: "Rahul Verma",
    role: "Small Business Owner",
    text: "Tracking multiple accounts used to be a nightmare. Now I open MoneyFlow once a day and I'm done.",
  },
  {
    name: "Sneha Iyer",
    role: "Student",
    text: "Goal tracking helped me save for my laptop. The progress bars are weirdly motivating.",
  },
  {
    name: "Karan Singh",
    role: "Marketing Lead",
    text: "Backup & restore worked flawlessly when I switched phones. Zero data loss. 10/10.",
  },
  {
    name: "Anika Patel",
    role: "Freelancer",
    text: "Beautiful interface, smart categories, and totally private. Exactly what I needed.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/40">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold mb-4">
            Loved by users
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Trusted by <span className="text-gradient">50,000+ people</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real reviews from real people taking control of their finances.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl bg-card border border-border p-6 shadow-sm-soft hover:shadow-md-soft transition-all">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed">"{r.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
