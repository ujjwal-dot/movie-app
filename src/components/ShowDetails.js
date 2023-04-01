import React,{useState} from "react";
import { useParams, Link } from "react-router-dom";
import BookingForm from "./BookingForm";
import ShowSummary from "./ShowSummary";

const ShowDetails = ({ shows }) => {
  const { id } = useParams();
  const show = shows.find((show) => show.show.id.toString() === id);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  if (!show) {
    return <div>Show not found</div>;
  }

 

  const handleBookTicketClick = () => {
    setIsBookingFormOpen(true);
  };

  const handleCloseBookingForm = () => {
    setIsBookingFormOpen(false);
  };

  return (
    <div>
      <ShowSummary show={show.show} />
      <Link to="/">Back to shows</Link>
      <br/>
      <button onClick={handleBookTicketClick}>Book Ticket</button>
      {isBookingFormOpen && (
        <BookingForm
          showName={show.show.name}
          imageUrl={show.show.image.medium}
          onClose={handleCloseBookingForm}
        />
      )}
    </div>
  );
};

export default ShowDetails