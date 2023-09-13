import React, { useState } from 'react';

function JobListingCard() {
    const [selectedCard, setSelectedCard] = useState(null);

    const jobListings = [
        { id: 1, title: 'Senior Software Engineering Manager - Digital Business Services', company: "HSBC", 
        specialisation: "Manager", rating: 3.8, img: "logo1554.png",
        country: "Singapore", posting: [30, "minutes"],
        techStack: ["Strategy", "Jenkins", "API", "CI", "Git", "Java", "Angular", "JavaScript", "React"],
        salary: ["S$", "8,500", "10,000"]},
        { id: 2, title: 'iOS Engineer - Intelligent Video Creation', company: "Tiktok",
        specialisation: "iOS", rating: 3.6, img: "logo240.png",
        country: "Singapore", posting: [4, "hours"],
        techStack: ["Objective C", "iOS", "Swift"],
        salary: []},
        { id: 3, title: 'DevOps Architect', company: "NCS", 
        specialisation: "DevOps", rating: 3.7, img: "logo278.png",
        country: "Singapore", posting: [1, "day"],
        techStack: ["Strategy", "GitLab", "Jenkins", "Shell Scirpt"],
        salary: ["S$", "8,500", "10,000"]},
    ];

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };
    return (
        <div className="panels">
            <div className="jobListingCardsContainer">
                {jobListings.map((jobListing) => (
                    <div 
                        key={jobListing.id}
                        className={`jobListingCard ${selectedCard === jobListing ? 'selected' : ''}`}
                        onClick={() => handleCardClick(jobListing)}
                    >
                        <div className="jobListingCardTopInformation">
                            <div className="topPortion biggerTopPortion">
                                <div className="avatarContainer">
                                    <img className="companyAvatar" src={jobListing.img} alt="logo"/>
                                </div>
                                <div className="specialisationContainer biggerSpecialisationContainer">
                                    <div className="specialisationTag">{jobListing.specialisation}</div>
                                </div>
                                <div className="informationContainer biggerInformationContainer">
                                    <p className="companynameAndRating">
                                        <span>
                                            {jobListing.company} {jobListing.rating}&nbsp;★
                                        </span>
                                    </p>
                                    <h2 className="jobListingCardTitle">
                                        {jobListing.title}
                                    </h2>
                                </div>
                            </div>
                            <div className="jobListingCardDetailsContainer biggerJobListingCardDetailsContainer">
                                <div className="recencyInformationAndCountry">
                                    <span className="recentPosting">
                                        {jobListing.posting[0]} {jobListing.posting[1]} ago
                                    </span>
                                    <div className="country">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" className="svg-inline--fa fa-map-marker-alt " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                            ::before
                                            <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                        </svg>
                                        &nbsp; {jobListing.country}
                                    </div>
                                </div>
                                <div> 
                                    <p className="jobListingCardSalary">
                                    {jobListing.salary.length !== 0 ? (
                                        <span className="salary">
                                            {jobListing.salary[0]}
                                            {jobListing.salary[1]} - {jobListing.salary[0]}
                                            {jobListing.salary[2]} / mth
                                        </span>
                                        ) : null}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="jobListingCardBottomInformation">
                            {jobListing.techStack.map((tech, index) => (
                                <span key={index} className="techStackContainer">{tech}</span>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="jobInformationContainer">
                <div className="card removeTopMargin">
                    <div className="topPortion">
                        <div className="largeText">
                            {selectedCard ? selectedCard.title : jobListings[0].title}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobListingCard;
