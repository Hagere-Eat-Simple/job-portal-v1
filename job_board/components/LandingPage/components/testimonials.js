 "use client"
import React, { useState, useRef } from "react";

const Reviews = ({ items }) => {
  const [currentItem, setCurrentItem] = useState(0);

  const nextItem = () => {
    const nextIndex = currentItem === items.length - 1 ? 0 : currentItem + 1;
    updateSlider(nextIndex, "translateX(-100%)");
  };

  const prevItem = () => {
    const prevIndex = currentItem === 0 ? items.length - 1 : currentItem - 1;
    updateSlider(prevIndex, "translateX(100%)");
  };

  const updateSlider = (index, transformValue) => {
    const sliderBox = sliderBoxRef.current;

    // Animate the slider box
    sliderBox.style.transition = "all 0.5s";
    sliderBox.style.transform = transformValue;

    // Update the state variables with the new item
    setCurrentItem(index);
    setQuote(items[index].testimonial);
    setRole(items[index].role);
    setName(items[index].name);
    setPhoto(items[index].photo);

    // After 0.5 seconds, change the style of the slider box to remove the transition and set the transform to 0
    setTimeout(() => {
      sliderBox.style.transition = "";
      sliderBox.style.transform = "translateX(0)";
    }, 500);
  };

  // Get the current quote
  const [quote, setQuote] = useState(items[currentItem].testimonial);
  const [role, setRole] = useState(items[currentItem].role);
  const [name, setName] = useState(items[currentItem].name);
  const [photo, setPhoto] = useState(items[currentItem].photo);

  // Ref for the slider box
  const sliderBoxRef = useRef(null);

  return (
    <>
      <section className="Testimonials">
        <div className="Slider" ref={sliderBoxRef}>
          <div className="Slider__items">
            {items.map((item, index) => (
              <div
                key={index}
                className={`Slider__item ${index === currentItem ? "active" : ""}`}
              >
                <div className="Quote">
                  <i className="fas fa-quote-left"></i>
                  <h1 className="title">What our customers say about us</h1>
                  <div className="NameAndRole">
                    <div className="Role">{role}</div>
                    <div className="Name">{name}</div>
                    <div className="Testimonial">{quote}</div>
                    <img className="Photo" src={photo} alt={item.name} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="Slider__arrows">
            <button className="Slider__arrow Slider__arrow--left" onClick={prevItem}>
              &lt;
            </button>
            <button className="Slider__arrow Slider__arrow--right" onClick={nextItem}>
              &gt;
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;