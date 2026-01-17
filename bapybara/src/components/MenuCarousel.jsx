import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function MenuCarousel({ title, items }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    const currentItem = items[currentIndex];

    return (
        <div className="carousel-container">
            <h3>{title}</h3>

            <div className="carousel-content">
                <button onClick={prevItem} aria-label="Previous Item" className="nav-btn">
                    <ChevronLeft size={24} />
                </button>

                <div className="current-item">
                    <span className="item-name">{currentItem.name}</span>
                    <span className="item-desc">{currentItem.desc}</span>
                    <span className="item-progress">{currentIndex + 1} / {items.length}</span>
                </div>

                <button onClick={nextItem} aria-label="Next Item" className="nav-btn">
                    <ChevronRight size={24} />
                </button>
            </div>

            <style>{`
                .carousel-container {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 16px;
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    min-height: 250px;
                }

                h3 {
                    font-family: var(--font-heading, "Outfit", sans-serif);
                    font-size: 1.5rem;
                    margin-bottom: 2rem;
                    color: #ffffff;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    padding-bottom: 0.5rem;
                    width: 100%;
                    text-align: center;
                }

                .carousel-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    gap: 1rem;
                    flex: 1;
                }

                .current-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: 0.5rem;
                    flex: 1;
                    /* Animation keyframe could be added, but simple state switch works */
                }

                .item-name {
                    font-family: var(--font-heading, "Outfit", sans-serif);
                    font-weight: 600;
                    font-size: 1.25rem;
                    color: #e0e0e0;
                }

                .item-desc {
                    font-family: var(--font-body, "Inter", sans-serif);
                    font-size: 0.95rem;
                    color: rgba(255, 255, 255, 0.6);
                    min-height: 3rem; /* maintain height if desc length varies */
                }

                .item-progress {
                    margin-top: 1rem;
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.3);
                }

                .nav-btn {
                    background: none;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #ffffff;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .nav-btn:hover {
                    background: rgba(255, 255, 255, 0.1);
                    transform: scale(1.1);
                }
            `}</style>
        </div>
    );
}
