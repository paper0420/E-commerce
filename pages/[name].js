import { useRouter } from "next/router"

const Name = () => {
    const router = useRouter();
    const {name} = router.query;
    console.log(name);
    return (
        <p>This will be dynamic</p>
    )
}

export default Name