/**
 * 1. e.target.[name of the input field].value
 * 2. use from action and formData i the action handler. formData.get('name   of the field')
 * 3. controlled component. one per each field. use state on change of the field. useful to dynamically handel error
 * 
 * 3. handle all controlled field on one state object
 *  const [fromData, setFromData] = useSate({
 *  name: '',
 *  Password: '',
 *  phone: '',
 *  })
 * 
 * 4. uncontrolled using useRef
 *
 */