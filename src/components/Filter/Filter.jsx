import "./Filter.css"

const Filter = () => {
    return (
        <>
            <div class="card text-white bg-primary">
                <h3 class="card-header">Filtres</h3>
                <fieldset class="form-group">
                    <legend class="mt-4">Checkboxes</legend>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Default checkbox
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Checked checkbox
                        </label>
                    </div>
                </fieldset>
            </div>
        </>
    )
}

export default Filter
