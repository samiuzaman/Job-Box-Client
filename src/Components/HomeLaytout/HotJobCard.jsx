import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "keep-react";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    _id,
    title,
    company_logo,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
  } = job;
  return (
    <div>
      <Card className="flex flex-col py-2 h-full">
        <CardHeader className="flex items-center gap-3 px-5 pt-3">
          <img
            src={company_logo}
            className="w-10 h-10 rounded-t-xl"
            alt="image"
            width={600}
            height={300}
          />
          <div>
            <h3 className="text-xl font-medium text-metal-700">{company}</h3>
            <p className="text-metal-400 flex items-center gap-2">
              <MdOutlineLocationOn />
              {location}
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <div className="flex items-center flex-wrap gap-3">
            {requirements?.map((skill, idx) => (
              <p key={idx} className="bg-primary-50 px-2 py-1 rounded-md">
                {skill}
              </p>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center px-5 mb-4 ">
          <div>
            <p>
              <span className="text-xl text-primary-700 font-medium">
                {salaryRange?.min} {salaryRange?.max} /
              </span>
              {salaryRange?.currency}
            </p>
          </div>
          <Link to={`/jobdetails/${_id}`}>
            <Button variant="softBg">Details</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default HotJobCard;
