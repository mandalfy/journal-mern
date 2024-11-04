import "./Create.css";

const Create = () => {
    const handleSubmit = () =>{
        alert("Submitted")
    }
    return (
    <section className="create">
        <form className="create-fields" onSubmit={(e) => handleSubmit(e)}>
            <div className="tags">
                <label htmlFor="title">Title</label>
                <input className="text-background" name="title"/>
            </div>
            <div className="tags">
                <label htmlFor="tags">Tags</label>
                <input type="text" class="text-background" placeholder="Enter tags" />
                </div>
            <label className="journalEntry_label" htmlFor="JournalEntry"> Make a new entry </label>
            <textarea className="journalEntry text-background" name="JournalEntry"></textarea>
            <button className="button" type="submit">Create</button>
        </form>
    </section>
    )
}

export default Create;