import React from "react";
import { destroyPostAsync } from "../slices/postSlice";

const EditDeleteButtons = (props: any) => {
  const deleteHandler = (e: React.SyntheticEvent) => {
    const payload = {
      post: {
        post_id: props.post_id,
      },
    };
    props.dispatch(destroyPostAsync(payload));
  };

  return (
    <div className="border-2 border-transparent ">
      <button
        className="bg-purple-500 text-white rounded-md shadow hover:ring-2 focus:ring-4 px-2 float-right"
        onClick={(e) => deleteHandler(e)}
      >
        Delete
      </button>
      <button
        className="bg-purple-300 text-black rounded-md shadow hover:ring-2 focus:ring-4 mx-3 px-2 float-right"
        onClick={() => props.toggleEditForm()}
      >
        Edit
      </button>
    </div>
  );
};

export default EditDeleteButtons;
