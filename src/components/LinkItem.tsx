import {BsArrowRightShort} from "react-icons/bs";

interface Props {
  text: string;
}

export default function LinkItem({text}: Props) {
	return(
		<div className='py-4 px-6 border-2 border-solid border-[##E9E9E9] rounded-lg'>
			<div className='flex gap-2 items-center justify-between cursor-pointer'>
				{text}
				<BsArrowRightShort className="text-[#B5B5B5]"/>
			</div>
		</div>
	);
}