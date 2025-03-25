import { Typography } from "../Typography";
import "./RadioInputCard.scss";

interface RadioInputCardProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  title: string;
  description: string;
  value: string | number;
}

export const RadioInputCard = ({
  name,
  title,
  description,
  value,
  ...otherProps
}: RadioInputCardProps) => {
  return (
    <label
      key={title}
      className={`radioInputCard
            relative w-64 p-6 rounded-lg cursor-pointer 
            border border-neutral-700 
            bg-neutral-800 
            transition-all duration-300 
            hover:border-blue-500/50
          `}
    >
      <input
        type="radio"
        name={name}
        value={value}
        {...otherProps}
        // onChange={() => setSelectedOption(option.id)}
        className="visually-hidden radioInputCard__input"
      />
      <div className="space-y-2">
        <Typography component="h2" variant="h6">
          {title}
        </Typography>
        <Typography component="p" variant="body--sm">
          {description}
        </Typography>
      </div>
    </label>
  );
};
