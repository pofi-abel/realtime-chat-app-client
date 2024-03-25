import { FormEvent, useState } from "react";
import { IoSearchCircle } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import { useGetConversations } from "../../hooks/useGetConversations";
import { toast } from 'sonner';

type Props = {};

const SearchInput = (props: Props) => {
    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversations();

    const handleSubmit = async (evt: FormEvent) => {
        evt.preventDefault();
        if (!search) return;
        if (search.length < 3) {
            return toast.info("Search must be at least 3 charachters long");
        }

        const conversation = conversations.find((c: any) => c.fullName.toLowerCase().includes(search.toLowerCase()));
        if (conversation) {
            setSelectedConversation(conversation);
            setSearch("");
        } else toast.error(`No user found!`);
    };

    return (
        <>
            <form className="flex items-center gap-2" onSubmit={handleSubmit}>
                <input type="text" placeholder="Search..." className="input input-bordered rounded-full" value={search} onChange={({ target }) => setSearch(target.value)} />
                <button type="submit" className="btn btn-circle bg-sky-500 text-white">
                    <IoSearchCircle className="w-6 h-6 outline-none" />
                </button>
            </form>
        </>
    );
};

export default SearchInput;