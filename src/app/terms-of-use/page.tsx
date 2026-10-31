import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { getSettings } from "@/lib/api";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using the YOKII Yogurt House website and LINE Official Account.",
};

export default async function TermsOfUsePage() {
  const s = await getSettings();
  const contact = [s.email, s.phone].filter(Boolean).join(" · ");

  const en: LegalSection[] = [
    {
      heading: "Acceptance of terms",
      body: [
        "By using the YOKII Yogurt House website or adding our LINE Official Account as a friend, you agree to these Terms of Use. If you do not agree, please stop using them.",
      ],
    },
    {
      heading: "Our services",
      body: [
        "Our website and LINE Official Account provide information about our menu, stores, franchise opportunities, promotions, and a way to contact us. Information may change without notice.",
      ],
    },
    {
      heading: "Acceptable use",
      body: [
        "You agree not to send unlawful, abusive, misleading or spam content, not to impersonate others, and not to interfere with the operation or security of our services.",
        "Your use of LINE is also governed by LINE’s own terms and policies.",
      ],
    },
    {
      heading: "Promotions and messages",
      body: [
        "Promotions are subject to conditions stated at the time of the offer and may be changed or withdrawn at any time. You can stop receiving messages by blocking or unfriending our LINE Official Account.",
      ],
    },
    {
      heading: "Intellectual property",
      body: [
        "The YOKII name, logo, images, menu content and website materials belong to YOKII Yogurt House or its licensors and may not be copied or used commercially without our written permission.",
      ],
    },
    {
      heading: "Disclaimer and liability",
      body: [
        "Services are provided “as is”. To the extent permitted by law, we are not liable for indirect or consequential loss arising from your use of the website or LINE Official Account. Product images are illustrative; allergen and nutritional information should be confirmed in store.",
      ],
    },
    {
      heading: "Privacy",
      body: ["Our handling of personal data is described in our Privacy Policy, which forms part of these terms."],
    },
    {
      heading: "Changes and governing law",
      body: [
        "We may update these terms from time to time; continued use means you accept the updated terms. These terms are governed by the laws of Thailand.",
      ],
    },
    {
      heading: "Contact us",
      body: [`Questions about these terms? Contact us at ${contact}.`],
    },
  ];

  const th: LegalSection[] = [
    {
      heading: "การยอมรับข้อกำหนด",
      body: [
        "การใช้เว็บไซต์ YOKII Yogurt House หรือการเพิ่ม LINE Official Account ของเราเป็นเพื่อน ถือว่าคุณยอมรับข้อกำหนดการใช้งานนี้ หากไม่ยอมรับ โปรดหยุดใช้บริการ",
      ],
    },
    {
      heading: "บริการของเรา",
      body: [
        "เว็บไซต์และ LINE Official Account ให้ข้อมูลเกี่ยวกับเมนู สาขา โอกาสในการเป็นแฟรนไชส์ โปรโมชั่น และช่องทางติดต่อเรา ข้อมูลอาจเปลี่ยนแปลงโดยไม่ต้องแจ้งล่วงหน้า",
      ],
    },
    {
      heading: "การใช้งานที่เหมาะสม",
      body: [
        "คุณตกลงว่าจะไม่ส่งเนื้อหาที่ผิดกฎหมาย ไม่เหมาะสม ทำให้เข้าใจผิด หรือสแปม ไม่แอบอ้างเป็นผู้อื่น และไม่รบกวนการทำงานหรือความปลอดภัยของบริการ",
        "การใช้ LINE ของคุณอยู่ภายใต้ข้อกำหนดและนโยบายของ LINE ด้วย",
      ],
    },
    {
      heading: "โปรโมชั่นและข้อความ",
      body: [
        "โปรโมชั่นเป็นไปตามเงื่อนไขที่ระบุ ณ เวลาที่เสนอ และอาจเปลี่ยนแปลงหรือยกเลิกได้ทุกเมื่อ คุณสามารถหยุดรับข้อความได้โดยบล็อกหรือลบเพื่อน LINE Official Account ของเรา",
      ],
    },
    {
      heading: "ทรัพย์สินทางปัญญา",
      body: [
        "ชื่อ โลโก้ รูปภาพ เนื้อหาเมนู และสื่อบนเว็บไซต์ของ YOKII เป็นของ YOKII Yogurt House หรือผู้อนุญาต ห้ามคัดลอกหรือใช้เพื่อการพาณิชย์โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษร",
      ],
    },
    {
      heading: "ข้อจำกัดความรับผิด",
      body: [
        "บริการจัดให้ตามสภาพ เท่าที่กฎหมายอนุญาต เราไม่รับผิดต่อความเสียหายทางอ้อมหรือความเสียหายที่ต่อเนื่องจากการใช้เว็บไซต์หรือ LINE Official Account รูปภาพสินค้าใช้เพื่อประกอบการอธิบายเท่านั้น ข้อมูลสารก่อภูมิแพ้และโภชนาการโปรดยืนยันกับทางร้าน",
      ],
    },
    {
      heading: "ความเป็นส่วนตัว",
      body: ["การดูแลข้อมูลส่วนบุคคลเป็นไปตามนโยบายความเป็นส่วนตัวของเรา ซึ่งถือเป็นส่วนหนึ่งของข้อกำหนดนี้"],
    },
    {
      heading: "การเปลี่ยนแปลงและกฎหมายที่ใช้บังคับ",
      body: [
        "เราอาจปรับปรุงข้อกำหนดนี้เป็นครั้งคราว การใช้งานต่อไปถือว่าคุณยอมรับข้อกำหนดที่ปรับปรุงแล้ว ข้อกำหนดนี้อยู่ภายใต้กฎหมายไทย",
      ],
    },
    {
      heading: "ติดต่อเรา",
      body: [`หากมีข้อสงสัยเกี่ยวกับข้อกำหนดนี้ ติดต่อได้ที่ ${contact}`],
    },
  ];

  return <LegalPage eyebrow="Legal" title="Terms of Use" updated="31 October 2026" en={en} th={th} />;
}
