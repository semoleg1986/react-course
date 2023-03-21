import React from 'react';
import './SearchBar.css';
import { BsSearch } from 'react-icons/bs';

interface IMyInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

class SearchInput extends React.Component<IMyInputProps> {
  constructor(props: IMyInputProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className="searchBar">
        <i>
          <BsSearch />
        </i>
        <input {...this.props} />
      </div>
    );
  }
}

export { SearchInput };
