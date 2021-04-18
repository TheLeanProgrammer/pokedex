import "./Searchbox.css";

interface SearchboxProps {
    onInputChange: (inputValue: string) => void;
}

const Searchbox = ({ onInputChange }: SearchboxProps) => {
    return (
        <input
            className="search"
            onChange={(e) => {
                console.log(e.target.value);
                onInputChange(e.target.value);
            }}
            type="search"
            placeholder="Search Pokemons"
        />
    );
};

export default Searchbox;
