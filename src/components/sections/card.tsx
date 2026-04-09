"use client";
import CardSwap, { Card } from "../ui/CardSwap";

export default function CardProps() {
  return (
    <div className="w-full relative -mt-16 md:-mt-24 z-10">
      {" "}
      {/* Kurangi margin negatif */}
      <div
        className="max-w-9xl mx-auto px-6"
        style={{ height: "500px", position: "relative" }}
      >
        <CardSwap
          cardDistance={45}
          verticalDistance={55}
          delay={5000}
          pauseOnHover={false}
        >
          <Card>
            <h3>Card 1</h3>
            <p>Your content here</p>
          </Card>
          <Card>
            <h3>Card 2</h3>
            <p>Your content here</p>
          </Card>
          <Card>
            <h3>Card 3</h3>
            <p>Your content here</p>
          </Card>
        </CardSwap>
      </div>
    </div>
  );
}
