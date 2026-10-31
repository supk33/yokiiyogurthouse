import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { getSettings } from "@/lib/api";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How YOKII Yogurt House collects, uses and protects your personal data, including via LINE Official Account.",
};

export default async function PrivacyPolicyPage() {
  const s = await getSettings();
  const contact = [s.email, s.phone].filter(Boolean).join(" · ");

  const en: LegalSection[] = [
    {
      heading: "Who we are",
      body: [
        "YOKII Yogurt House (“we”, “us”) operates the website www.yokiiyogurthouse.com and the YOKII LINE Official Account. This policy explains how we handle personal data when you use them.",
      ],
    },
    {
      heading: "Data we collect",
      body: [
        "Via LINE Official Account: your LINE display name, profile picture, LINE user ID, and the messages you send us.",
        "Via our website forms: your name, phone number, email address and the details you include in your inquiry.",
        "Technical data such as browser type and pages visited, collected through standard server logs and cookies.",
      ],
    },
    {
      heading: "How we use your data",
      body: [
        "To reply to your questions and inquiries, including franchise and contact requests.",
        "To send news, promotions and menu updates through LINE, only if you have added our account as a friend. You may block or unfriend us at any time to stop receiving them.",
        "To improve our products, services and website, and to comply with the law.",
      ],
    },
    {
      heading: "Sharing your data",
      body: [
        "We do not sell your personal data. We share it only with service providers that help us operate (for example LINE Corporation as the messaging platform, and our website hosting provider), or when required by law.",
      ],
    },
    {
      heading: "Retention and security",
      body: [
        "We keep personal data only as long as needed for the purposes above or as required by law, and use reasonable technical and organizational measures to protect it.",
      ],
    },
    {
      heading: "Your rights",
      body: [
        "Under Thailand’s Personal Data Protection Act (PDPA), you may request access to, correction of, or deletion of your personal data, object to or restrict its processing, and withdraw consent at any time.",
      ],
    },
    {
      heading: "Changes to this policy",
      body: ["We may update this policy from time to time. The latest version will always be available on this page."],
    },
    {
      heading: "Contact us",
      body: [`To exercise your rights or ask questions about this policy, contact us at ${contact}.`],
    },
  ];

  const th: LegalSection[] = [
    {
      heading: "เราคือใคร",
      body: [
        "YOKII Yogurt House (“เรา”) เป็นผู้ให้บริการเว็บไซต์ www.yokiiyogurthouse.com และ LINE Official Account ของ YOKII นโยบายนี้อธิบายวิธีที่เราดูแลข้อมูลส่วนบุคคลของคุณเมื่อใช้บริการดังกล่าว",
      ],
    },
    {
      heading: "ข้อมูลที่เราเก็บรวบรวม",
      body: [
        "ผ่าน LINE Official Account: ชื่อที่แสดงใน LINE รูปโปรไฟล์ LINE User ID และข้อความที่คุณส่งถึงเรา",
        "ผ่านแบบฟอร์มบนเว็บไซต์: ชื่อ เบอร์โทรศัพท์ อีเมล และรายละเอียดที่คุณระบุในการติดต่อ",
        "ข้อมูลทางเทคนิค เช่น ประเภทเบราว์เซอร์และหน้าที่เข้าชม ซึ่งเก็บผ่านบันทึกของเซิร์ฟเวอร์และคุกกี้ตามปกติ",
      ],
    },
    {
      heading: "วัตถุประสงค์ในการใช้ข้อมูล",
      body: [
        "เพื่อตอบคำถามและคำขอของคุณ รวมถึงการสอบถามเรื่องแฟรนไชส์และการติดต่อ",
        "เพื่อส่งข่าวสาร โปรโมชั่น และเมนูใหม่ผ่าน LINE เฉพาะเมื่อคุณเพิ่มบัญชีของเราเป็นเพื่อน คุณสามารถบล็อกหรือลบเพื่อนได้ทุกเมื่อเพื่อหยุดรับข้อความ",
        "เพื่อปรับปรุงผลิตภัณฑ์ บริการ และเว็บไซต์ และเพื่อปฏิบัติตามกฎหมาย",
      ],
    },
    {
      heading: "การเปิดเผยข้อมูล",
      body: [
        "เราไม่ขายข้อมูลส่วนบุคคลของคุณ เราเปิดเผยข้อมูลเฉพาะแก่ผู้ให้บริการที่ช่วยในการดำเนินงาน (เช่น LINE Corporation ในฐานะแพลตฟอร์มข้อความ และผู้ให้บริการโฮสติ้งเว็บไซต์) หรือเมื่อกฎหมายกำหนด",
      ],
    },
    {
      heading: "ระยะเวลาเก็บรักษาและความปลอดภัย",
      body: [
        "เราเก็บข้อมูลส่วนบุคคลเท่าที่จำเป็นตามวัตถุประสงค์ข้างต้นหรือตามที่กฎหมายกำหนด และใช้มาตรการทางเทคนิคและการจัดการที่เหมาะสมเพื่อปกป้องข้อมูล",
      ],
    },
    {
      heading: "สิทธิของคุณ",
      body: [
        "ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) คุณมีสิทธิขอเข้าถึง แก้ไข หรือลบข้อมูลส่วนบุคคล คัดค้านหรือจำกัดการประมวลผล และถอนความยินยอมได้ทุกเมื่อ",
      ],
    },
    {
      heading: "การเปลี่ยนแปลงนโยบาย",
      body: ["เราอาจปรับปรุงนโยบายนี้เป็นครั้งคราว โดยเวอร์ชันล่าสุดจะแสดงอยู่ในหน้านี้เสมอ"],
    },
    {
      heading: "ติดต่อเรา",
      body: [`หากต้องการใช้สิทธิหรือสอบถามเกี่ยวกับนโยบายนี้ ติดต่อได้ที่ ${contact}`],
    },
  ];

  return <LegalPage eyebrow="Legal" title="Privacy Policy" updated="31 October 2026" en={en} th={th} />;
}
