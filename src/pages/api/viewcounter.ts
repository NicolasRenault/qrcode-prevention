import fs from "node:fs";

const filePath = "./public/viewcounter.txt";

export async function GET() {
    try {
        if (!fs.existsSync(filePath)) {
            console.error("File doesn't exist");
            throw new Error("File doesn't exist");
        } else {
            const fileData = fs.readFileSync(filePath, "utf-8");
            let numberOfViews: number = Number(fileData) || 0;
            numberOfViews++;
            
            fs.writeFileSync(filePath, String(numberOfViews));

            return new Response(
                JSON.stringify({
                    message: numberOfViews
                }),
                {status: 200}
            );
        }
    }
    catch(error){
        console.error("catch: " + error);
        return new Response(
            JSON.stringify({
                message: error
            }),
            {status: 500}
        );
    }

    
}
