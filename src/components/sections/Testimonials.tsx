import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { StarRating } from "@/components/StarRating";

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

const TestimonialCard = ({
  name,
  role,
  text,
}: {
  name: string;
  role: string;
  text: string;
}) => (
  <div className="rounded-2xl bg-card border border-border p-6 shadow-sm-soft hover:shadow-md-soft transition-all">
    <StarRating className="mb-3" />
    <p className="text-foreground leading-relaxed">"{text}"</p>
    <div className="mt-5 flex items-center gap-3">
      <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
        {name.charAt(0)}
      </div>
      <div>
        <p className="text-sm font-bold text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </div>
  </div>
);

export const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/40">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Loved by users"
          title={
            <>
              Trusted by <span className="text-gradient">50,000+ people</span>
            </>
          }
          description="Real reviews from real people taking control of their finances."
          className="max-w-2xl mx-auto mb-14"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <TestimonialCard key={review.name} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};
