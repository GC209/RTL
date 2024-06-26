
export const Application = () => {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <div data-testid="custom-element">Custom Element</div>
      <form>
        <div>
          <label htmlFor="name" >Name</label>
          <input type="text" id="name" placeholder="Fullname" value="Gaurav"/>
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <input id="bio" name="bio"/>
        </div>
        <div>
          <label htmlFor="job-location">Job location</label>
          <select id="job-location">
            <option value=''>Select a country</option>
            <option value='US'>United States</option>
            <option value='UK'>United Kingdom</option>
            <option value='IN'>India</option>
            <option value='AU'>Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> Iagree to the terms and conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  )
}
